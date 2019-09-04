import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { lang } from '../../../locales/config';

const SearchInput = (props) => {

    const inputElement = useRef(null);

    useEffect(() => {
        inputElement.current.focus();
    }, []);

    return (
        <input
            ref={inputElement}
            className='search-input'
            placeholder={lang.SEARCH_INPUT_PLACEHOLDER}
            value={props.input}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
        />        
    );
};

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    input: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
};

export default SearchInput;