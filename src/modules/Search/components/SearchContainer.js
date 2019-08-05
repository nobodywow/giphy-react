import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { lang } from '../../../locales/config';
import { connect } from 'react-redux';
import Search from './Search';
import SearchUpload from './SearchUpload';
import { searchActions } from '../search.actions';
import { paths, constructPath } from '../../../routes/paths';
import { convertKeywordToQuery } from '../../../utils/stringUtils';

const SearchContainer = (props) => {

    const [input, setInput] = useState('');
    const [file, setFile] = useState({});
    
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const navigate = (keyword) => {
        props.history.push(constructPath(paths.search, { q: convertKeywordToQuery(keyword) }));
    };

    const onEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (input.length !== 0) {
                onSearch();
            }
        }
    };    

    const onSearch = () => {
        props.resetKeyword(input);
        navigate(input);
    };
    
    const onFileChange = (event) => setFile(event.target.files[0]);

    const onUpload = () => {
        props.uploadGif(file);
    };

    return (
        <div>
            <Search
                inputPlaceholder={lang.SEARCH_INPUT_PLACEHOLDER}
                onInputChange={inputChangeHandler}
                onEnterKeyPress={onEnterKeyPress}
                input={input}
                buttonText={lang.SEARCH_BUTTON}
                onClick={onSearch}
            />
            <SearchUpload
                onClick={onUpload}
                onFileChange={onFileChange}
                text={lang.UPLOAD_BUTTON}
            />
        </div>
    );
    
};

SearchContainer.propTypes = {
    history: PropTypes.object,
    uploadGif: PropTypes.func,
    resetKeyword: PropTypes.func,
};

const mapStateToProps = state => ({
    gifs: state.gifs,    
});

const mapDispatchToProps = dispatch => ({
    resetKeyword: (keyword) => dispatch(searchActions.resetKeyword.success({ keyword })),
    uploadGif: (gif) => dispatch(searchActions.uploadGif.fetch({ gif })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);