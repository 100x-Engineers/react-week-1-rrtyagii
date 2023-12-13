import React, {useState} from 'react'
import searchIcon from '../../assets/search-group.svg';
import lightSearchIcon from '../../assets/light-search-group.svg';

import PropTypes from 'prop-types';

export function Search({onSubmitCallback}) {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={`flex items-center w-22.5rem m-6 px-4 py-2 rounded-full bg-neutral-800 ${isFocused ? 'ring-2 ring-twitter-blue-hover' : ''}`}>
        <img 
            src={isFocused ? searchIcon : lightSearchIcon} 
            alt="Search" 
            className="w-5 h-5 mr-3 text-neutral-500" />
        <input
          type="search"
          placeholder="Search"
          className="w-full bg-transparent text-white placeholder-neutral-500 outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmit={onSubmitCallback}
        />
      </div>
    );
};

Search.propTypes = {
  onSubmitCallback: PropTypes.func,
};