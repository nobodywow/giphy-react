import React from 'react';
// import locales

const SearchInput = (props) => {

    return (
        <input className='search-input' type='text' autoFocus='true' placeholder='add in locale' onKeyPress={props.onEnterKeyPress}></input>
    );

};

export default SearchInput;
