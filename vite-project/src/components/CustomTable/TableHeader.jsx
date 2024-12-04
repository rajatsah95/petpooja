import React from 'react';
import './CustomTable.css';

const TableHeader = ({ columns, sortConfig, onSort, onFilterChange }) => {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.key}>
            <div className="header-cell">
              <span onClick={() => onSort(col.key)}>
                {col.title}
                {sortConfig?.key === col.key && 
                  (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
              </span>
              {col.filterable && (
                <input
                  type="text"
                  placeholder={`Filter ${col.title}`}
                  onChange={(e) => onFilterChange(col.key, e.target.value)}
                />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
