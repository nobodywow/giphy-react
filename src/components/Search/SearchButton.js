import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = (props) => {
    return (
        <button
            className='search-button'
            onClick={props.onClick}
            disabled={props.input.length === 0}
        >
        {props.text}
        </button> 
    );
};

SearchButton.propTypes = {
    onClick: PropTypes.func,
    input: PropTypes.string,
    text: PropTypes.string,
};

export default SearchButton;