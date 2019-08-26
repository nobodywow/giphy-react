import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from './Search';
import SearchUpload from './SearchUpload';
import SearchAuth from './SearchAuth';
import { searchActions } from '../search.actions';
import { paths, constructPath } from '../../../routes/paths';
import { convertKeywordToQuery } from '../../../utils/stringUtils';

const SearchContainer = (props) => {

    const [input, setInput] = useState('');
    const [file, setFile] = useState({});
    const [username, setUsername] = useState('');
    const [avatarUrl, setAvatar] = useState('');
    const [isShowUser, setShowUser] = useState(false);
    
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

    const onUsernameChange = (event) => setUsername(event.target.value);
    const onAvatarChange = (event) => setAvatar(event.target.value);

    const onAuth = () => {
        props.authUser(username, avatarUrl);
        setShowUser(false);
    };

    const onUserClick = () => {
        setShowUser(true);
    };

    return (
        <div>
            <Search
                onInputChange={inputChangeHandler}
                onEnterKeyPress={onEnterKeyPress}
                input={input}
                onClick={onSearch}
            />
            <SearchUpload
                onClick={onUpload}
                onFileChange={onFileChange}
                onUserClick={onUserClick}
            />
            {isShowUser
            ? <SearchAuth
                onUsernameChange={onUsernameChange}
                onAvatarChange={onAvatarChange}
                onClick={onAuth}
              />
            : null
            }
        </div>
    );
    
};

SearchContainer.propTypes = {
    history: PropTypes.object,
    uploadGif: PropTypes.func,
    resetKeyword: PropTypes.func,
    authUser: PropTypes.func,
};

const mapStateToProps = state => ({
    gifs: state.gifs,    
});

const mapDispatchToProps = dispatch => ({
    resetKeyword: (keyword) => dispatch(searchActions.resetKeyword.request({ keyword })),
    uploadGif: (gif) => dispatch(searchActions.uploadGif.fetch({ gif })),
    authUser: (username, avatarUrl) => dispatch(searchActions.authUser.request({ username, avatarUrl })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);