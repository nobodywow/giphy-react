import React from 'react';
import PropTypes from 'prop-types';
import SearchAuthUserField from './SearchAuthUserField';
import SearchAuthButton from './SearchAuthButton';

const SearchAuth = (props) => {
    return (
        <div className='userauth'>
            <SearchAuthUserField
                onUsernameChange={props.onUsernameChange}
                onAvatarChange={props.onAvatarChange}
            />

            <SearchAuthButton
                onClick={props.onClick}
            />
        </div>
    )
}

SearchAuth.propTypes = {
    onClick: PropTypes.func,
    onUsernameChange: PropTypes.func,
    onAvatarChange: PropTypes.func,
};

export default SearchAuth;