import React from 'react';
import './CustomTable.css';

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((col) => (
            <td key={col.key}>{row[col.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;