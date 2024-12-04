import React from 'react';

const FilterInput = ({ onChange, placeholder }) => (
  <input type="text" onChange={onChange} placeholder={placeholder} />
);

export default FilterInput;
