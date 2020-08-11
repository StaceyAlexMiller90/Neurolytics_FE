import React from 'react';
import Select from '../Select';
import './Header.css';

const SelectDropdown = ({ handleDateChange, handleSortChange }) => {
  const filterOptions = [
    { value: '1 months', content: 'Last month' },
    { value: '2 weeks', content: 'Last two weeks' },
    { value: '1 weeks', content: 'Last week' },
  ];
  const sortOptions = [
    { value: 'newest', content: 'Newest first' },
    { value: 'oldest', content: 'Oldest first' },
  ];
  const executeOnChange = (value, type) => {
    if (type === 'filter') {
      handleDateChange(value);
    } else if (type === 'sort') {
      handleSortChange(value);
    }
  };

  return (
    <header>
      <h1 className="header__title">NASA’s Astronomy Picture of the Day</h1>
      <section className="header__select" aria-label="Filter and sort options">
        <Select name="sort" options={sortOptions} handleChange={(value) => executeOnChange(value, 'sort')} />
        <Select name="filter" options={filterOptions} handleChange={(value) => executeOnChange(value, 'filter')} />
      </section>
    </header>
  );
};

export default SelectDropdown;
