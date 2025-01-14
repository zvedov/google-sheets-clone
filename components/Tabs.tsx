import React from 'react';

const Tabs = ({ sheets, activeTab, setActiveTab }) => {
    return (
        <div className="fixed bottom-0 w-full bg-gray-200 flex">
            {sheets.map((sheet, index) => (
                <button
                    key={sheet.name}
                    className={`px-4 py-2 ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    onClick={() => setActiveTab(index)}
                >
                    {sheet.name}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
