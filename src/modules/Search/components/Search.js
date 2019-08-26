import React from 'react';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import './Search.css';

const Search = (props) => {
    return (
        <div>
            <div className='search'>
                <SearchInput
                    onChange={props.onInputChange}
                    onKeyPress={props.onEnterKeyPress}
                    input={props.input}
                />
                <SearchButton
                    onClick={props.onClick}
                    input={props.input}
                    isDisabled={props.input.length === 0}
                />    
            </div>
        </div>
    );
};

Search.propTypes = {
    onInputChange: PropTypes.func,
    input: PropTypes.string,
    onEnterKeyPress: PropTypes.func,
    onClick: PropTypes.func,
    buttonText: PropTypes.string,
    inputPlaceholder: PropTypes.string,
};

export default Search;