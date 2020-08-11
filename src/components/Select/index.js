import React from 'react';
import './Select.css';

const Select = ({ options, handleChange, title }) => {
  return (
    <div className="dropdown__box">
      <select title={title} className="dropdown__menu" onChange={(e) => handleChange(e.target.value)}>
        {options.map((option, i) => {
          return (
            <option key={i} className="dropdown__item" value={option.value}>
              {option.content}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
