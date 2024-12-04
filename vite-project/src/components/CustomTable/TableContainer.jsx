import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './CustomTable.css';

const TableContainer = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [filters, setFilters] = useState({});

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredData = data.filter((row) =>
    Object.entries(filters).every(([key, value]) => 
      row[key]?.toString().toLowerCase().includes(value.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="table-container">
      <TableHeader 
        columns={columns} 
        sortConfig={sortConfig} 
        onSort={handleSort} 
        onFilterChange={handleFilterChange} 
      />
      <TableBody data={sortedData} columns={columns} />
    </div>
  );
};

export default TableContainer;
