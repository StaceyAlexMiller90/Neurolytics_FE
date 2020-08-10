import React from 'react';
import './Header.css';

const SelectDropdown = ({ handleDateChange }) => {
  const executeOnChange = (value) => {
    handleDateChange(value);
  };

  return (
    <header className="header">
      <h1 className="header__title">NASA’s Astronomy Picture of the Day</h1>
      <div className="dropdown__box">
        <select className="dropdown__menu" onChange={(e) => executeOnChange(e.target.value)}>
          <option className="dropdown__item">Last Month</option>
          <option className="dropdown__item">Last Two Weeks</option>
          <option className="dropdown__item">Last Week</option>
        </select>
      </div>
    </header>
  );
};

export default SelectDropdown;