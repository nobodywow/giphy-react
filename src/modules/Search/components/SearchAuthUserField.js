import React from 'react';
import PropTypes from 'prop-types';
import { lang } from '../../../locales/config';

const SearchAuthUserField = (props) => {
    return(
        <>
            <input
                className='search-auth-user'
                placeholder={lang.USER_AUTH_PLACEHOLDER}
                onChange={props.onUsernameChange}
            />

            <input
                placeholder={lang.USER_AVATAR_PLACEHOLDER}
                onChange={props.onAvatarChange}
            />
        </>
        
    );
};

SearchAuthUserField.propTypes = {
    placeholder: PropTypes.string,
    input: PropTypes.string,
    onUsernameChange: PropTypes.func,
    onAvatarChange: PropTypes.func,
};

export default SearchAuthUserField;