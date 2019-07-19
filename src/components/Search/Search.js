import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { en } from '../../locales/en/en';
import { convertKeywordForUrl } from '../../utils/stringUtils';
import './Search.css';

const Search = (props) => {

    const [input, setInput] = useState('');
    const [file, setFile] = useState({});
    
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const navigate = (keyword) => {
        props.history.push(`/search?q=${convertKeywordForUrl(keyword)}`);
    };

    const onEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (input.length !== 0) {
                navigate(input);
            }
        }
    };

    const inputElement = useRef(null);

    useEffect(() => {
        inputElement.current.focus();
    });

    const handleButtonClick = () => {
        navigate(input);        
    };
    
    const onFileChange = (event) => setFile(event.target.files[0]);

    const handleUploadButton = () => {
        props.uploadGif(file);
    };

    return (
        <div>
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

            <div className='upload'>
                <input
                  type='file'
                  onChange={onFileChange}
                />

                <button
                  onClick={handleUploadButton}
                >
                UPLOAD
                </button>
            </div>
        </div>
    );
};

Search.propTypes = {
    history: PropTypes.object,
};

export default Search;