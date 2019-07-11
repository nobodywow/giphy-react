import React, { useEffect, useState, useRef } from 'react';
import './Search.css';
import { en } from '../../locales/en/en';

const Search = (props) => {

    const [input, setInput] = useState('');
    
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const navigate = (parameters) => {
        props.history.push(`/search?q=${parameters.split(' ').join('+')}`);
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

    return (
        <div className='Search'>
            <input
              ref={inputElement}
              className='Search_input'
              placeholder={en.SEARCH_INPUT_PLACEHOLDER}
              value={input}
              onChange={inputChangeHandler}
              onKeyPress={onEnterKeyPress}
            />
            
            <button
              className='Search_button'
              onClick={() => navigate(input)}
              disabled={input.value > 0}
            >
            {en.SEARCH_BUTTON}
            </button>
        </div>
    );
};

export default Search;