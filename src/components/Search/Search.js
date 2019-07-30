import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import { lang } from '../../locales/config';
import { convertKeywordToQuery } from '../../utils/stringUtils';
import { endpoints, constructPath } from '../../routes/endpoints';
import SearchUploadField from './SearchUploadField';
import SearchUploadButton from './SearchUploadButton';
import './Search.css';

const Search = (props) => {

    const [input, setInput] = useState('');
    const [file, setFile] = useState({});
    
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const navigate = (keyword) => {
        props.history.push(constructPath(endpoints.search, { q: convertKeywordToQuery(keyword) }));
    };

    const onEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (input.length !== 0) {
                handleButtonClick();
            }
        }
    };    

    const handleButtonClick = () => {
        props.resetKeyword(input);
        navigate(input);
    };
    
    const onFileChange = (event) => setFile(event.target.files[0]);

    const handleUploadButton = () => {
        props.uploadGif(file);
    };

    return (
        <div>
            <div className='search'>
                <SearchInput
                    placeholder={lang.SEARCH_INPUT_PLACEHOLDER}
                    onChange={inputChangeHandler}
                    onKeyPress={onEnterKeyPress}
                    input={input}
                />
                <SearchButton
                    onClick={handleButtonClick}
                    input={input}
                    text={lang.SEARCH_BUTTON}
                />                
            </div>

            <div className='upload'>
                <SearchUploadField
                    onChange={onFileChange}
                />
                <SearchUploadButton
                    onClick={handleUploadButton}
                    text={lang.UPLOAD_BUTTON}
                />                
            </div>
        </div>
    );
};

Search.propTypes = {
    history: PropTypes.object,
    uploadGif: PropTypes.func,
    resetKeyword: PropTypes.func,
};

export default Search;