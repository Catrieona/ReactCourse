import React, { useState } from 'react';
import './SearchBar.css';
import Button from '../../common/Button';
import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({
  setCoursesList,
  coursesList,
}) => {
  const [searchItem, setSearchItem] = useState('');
  const handleSearch = () => {
    setCoursesList((prev) => {
      if (!searchItem.length) {
        return;
      }
      const newList = prev.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
          item.id.includes(searchItem)
        );
      });
      return newList;
    });
  };

  const handleSetSearchItem = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <div className='search-bar__container'>
      <input
        onChange={handleSetSearchItem}
        value={searchItem}
        placeholder='Enter course name...'
        className='search-bar__input'
      />
      <Button
        onClick={handleSearch}
        className='search-bar__button'
        text='Search'
      />
    </div>
  );
};

export default SearchBar;
