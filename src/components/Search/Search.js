import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import { en } from '../../locales/en/en';
import { convertKeywordForUrl } from '../../utils/stringUtils';

const Search = (props) => {

    const [input, setInput] = useState('');
    
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const navigate = (keyword) => {
        props.history.push(`/search?q=${convertKeywordForUrl(keyword)}`);
    };

    const onEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate(input);
        }
    };

    const inputElement = useRef(null);

    useEffect(() => {
        (() => {
            inputElement.current.focus();
        })();
    });

    const handleButtonClick = useCallback(
        () => {
            navigate(input);
        }, [input],
    );

    return (
        <div className='search'>
            <input
              ref={inputElement}
              className='search-input'
              placeholder={en.SEARCH_INPUT_PLACEHOLDER}
              value={input}
              onChange={inputChangeHandler}
              onKeyPress={onEnterKeyPress}
            />
            
            <button
              className='search-button'
              onClick={handleButtonClick}
              disabled={input.length === 0}
            >
            {en.SEARCH_BUTTON}
            </button>
        </div>
    );
};

Search.propTypes = {
    history: PropTypes.object,
};

export default Search;