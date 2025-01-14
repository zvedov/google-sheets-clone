import React, { useState, useEffect } from 'react';
import Tabs from '@/components/Tabs';
import SheetViewer from '@/components/SheetViewer';
import client from '../src/sanity/lib/sanity';
import * as XLSX from 'xlsx';


const handleFileUpload = (file) => {
  const reader = new FileReader();
  reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheets = workbook.SheetNames.map((sheetName) => ({
          name: sheetName,
          data: XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]),
      }));

      console.log(sheets);
      // Save the parsed sheets to your Sanity database
  };
  reader.readAsArrayBuffer(file);
};

const Page = () => {
    const [sheets, setSheets] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchSheets = async () => {
            const data = await client.fetch('*[_type == "sheet"]');
            setSheets(data);
        };
        fetchSheets();
    }, []);

    if (!sheets.length) return 
      (
        <div>
          <input type="file" accept=".xlsx" onChange={(e) => handleFileUpload(e.target.files[0])} />
          <p>Loading...</p>;
        </div>
      )


    return (
        <div>
            <header className="bg-gray-300 p-4">
                <h1 className="text-xl">Google Sheets Clone</h1>
            </header>
            <main className="mt-4">
                <SheetViewer data={sheets[activeTab]?.data || []} />
            </main>
            <Tabs sheets={sheets} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
};

export default Page;
