import React from 'react';

const UITable = ({
  columns = [], // Array of column definitions: [{ label: 'Name', key: 'name', render?: (item) => <></> }]
  data = [],     // Array of row objects matching column keys
  title,         // Optional table title
  actions = () => null // Optional function for action buttons per row
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {title && (
        <h2 className="text-1xl font-bold mb-4 text-gray-900">{title}</h2>
      )}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-900 text-white text-left">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`font-semibold py-3 px-4 ${index === 0 ? 'rounded-tl-md' : ''} ${index === columns.length - 1 ? 'rounded-tr-md' : ''}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500 font-medium"
              >
                No data available.
              </td>
            </tr>
          )}
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="py-4 px-4 text-gray-900 font-medium"
                >
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UITable;
