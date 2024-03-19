import React, { useState } from 'react';

const TextInputDropdown: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(e.target.value);
    setInputValue(e.target.value); // Set the input value to the selected dropdown value
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter text"
      />
      <select
        value={dropdownValue}
        onChange={handleDropdownChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
      >
        <option value="">Select option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default TextInputDropdown;
