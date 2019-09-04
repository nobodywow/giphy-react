import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from './Search';
import SearchUpload from './SearchUpload';
import { searchActions } from '../search.actions';
import { paths, constructPath } from '../../../routes/paths';
import { convertKeywordToQuery } from '../../../utils/stringUtils';
import UserBar from '../../../common/components/userBar';
import UserAuth from '../../../common/components/userAuth';

const SearchContainer = (props) => {

    const [input, setInput] = useState('');
    const [file, setFile] = useState({});
    const [username, setUsername] = useState('');
    const [avatarUrl, setAvatar] = useState('');
    const [isShowUser, setShowUserAuth] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isShowUpload, setShowUpload] = useState(false);
    const [tags, setTags] = useState('');
    
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
        props.uploadGif(file, props.currentUser, tags);
    };

    const onUsernameChange = (event) => setUsername(event.target.value);
    const onAvatarChange = (event) => setAvatar(event.target.value);

    const onUserAuthBackground = () => {
        setShowUserAuth(false);
    };

    const onAuth = () => {
        if(username.length > 0 && avatarUrl.length > 0) {            
            props.authUser(username, avatarUrl);
            setShowUserAuth(false);
            setIsAuth(true);
        }
    };

    const onSignOut = () => {
        setIsAuth(false);
        props.logOut();
    };

    const onSignIn = () => {
        setShowUserAuth(true);
    };

    const onUserAuthDiv = (event) => {
        event.stopPropagation();
    };

    const onShowUpload = () => {
        setShowUpload(true);
    };

    const onTagsChange = (event) => {
        setTags(event.target.value);
    };

    return (
        <div>
            {
                isShowUser
                ? <UserAuth
                    onUsernameChange={onUsernameChange}
                    onAvatarChange={onAvatarChange}
                    onClick={onAuth}
                    onUserAuthDiv={onUserAuthDiv}
                    onUserAuthBackground={onUserAuthBackground}
                  />
                : null            
            }

            <UserBar
                username={username}
                avatarUrl={avatarUrl}
                isAuth={isAuth}
                onSignIn={onSignIn}
                onSignOut={onSignOut}             
            />

            <Search
                onInputChange={inputChangeHandler}
                onEnterKeyPress={onEnterKeyPress}
                input={input}
                onClick={onSearch}
            />            
            
            <SearchUpload
                    onTagsChange={onTagsChange}
                    isShowUpload={isShowUpload}
                    onShowUpload={onShowUpload}
                    onClick={onUpload}
                    onFileChange={onFileChange}
                    onSignIn={onSignIn}
            />         
        </div>
    );
    
};

SearchContainer.propTypes = {
    currentUser: PropTypes.string,
    history: PropTypes.object,
    uploadGif: PropTypes.func,
    resetKeyword: PropTypes.func,
    authUser: PropTypes.func,
    logOut: PropTypes.func,
};

const mapStateToProps = state => ({
    currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
    resetKeyword: (keyword) => dispatch(searchActions.resetKeyword.request({ keyword })),
    uploadGif: (gif, username, tags) => dispatch(searchActions.uploadGif.fetch({ gif, username, tags })),
    authUser: (username, avatarUrl) => dispatch(searchActions.authUser.request({ username, avatarUrl })),
    logOut: () => dispatch(searchActions.authUser.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);