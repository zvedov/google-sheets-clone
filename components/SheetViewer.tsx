import React from 'react';

const SheetViewer = ({ data }) => {
    return (
        <div className="p-4">
            <table className="table-auto border-collapse border border-gray-500">
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.split(',').map((cell, cellIndex) => (
                                <td key={cellIndex} className="border border-gray-400 px-2 py-1">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SheetViewer;
