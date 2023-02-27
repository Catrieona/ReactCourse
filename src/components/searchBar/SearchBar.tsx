import React, { useState } from 'react';
import './SearchBar.css';
import Button from '../../common/Button';
import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [searchItem, setSearchItem] = useState('');

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
        onClick={() => handleSearch(searchItem)}
        className='search-bar__button'
        text='Search'
      />
    </div>
  );
};

export default SearchBar;
