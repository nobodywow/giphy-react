import React from 'react';
// import locales

const SearchButton = (props) => {

    return (
        <button className='search-btn' onClick={props.navigate} onKeyUp={props.enterKeypress} disabled={props.input.value > 0}>LOCALES</button>
    );

};

export default SearchButton;