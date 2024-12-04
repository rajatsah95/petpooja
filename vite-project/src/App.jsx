import React from 'react';
import TableContainer from './components/CustomTable/TableContainer';
import FormContainer from './components/CustomForm/FormContainer';
import DatePickerContainer from './components/CustomDatePicker/DatePickerContainer';
import './App.css';

const App = () => {
  const tableData = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

  const tableColumns = [
    { key: 'id', title: 'ID', filterable: true },
    { key: 'name', title: 'Name', filterable: true },
    { key: 'age', title: 'Age', filterable: false },
  ];

  const formConfig = [
    { name: 'username', label: 'Username', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'text', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ];

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  const handleDateSelect = (range) => {
    console.log('Date Selected:', range);
  };

  return (
    <div className="app">
      <h1>React App with Custom Components</h1>
      <h2>Custom Table</h2>
      <TableContainer data={tableData} columns={tableColumns} />
      <h2>Custom Form</h2>
      <FormContainer formConfig={formConfig} onSubmit={handleFormSubmit} />
      <h2>Custom Date Picker</h2>
      <DatePickerContainer onDateSelect={handleDateSelect} />
    </div>
  );
};

export default App;
