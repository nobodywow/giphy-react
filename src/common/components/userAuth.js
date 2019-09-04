import React from 'react';
import PropTypes from 'prop-types';
import { lang } from '../../locales/config';
import Button from './Button';
import './userAuth.css';

const UserAuth = (props) => {
    return (
        <div className='userauth-container' onClick={props.onUserAuthBackground}>
            <div className='userauth' onClick={props.onUserAuthDiv}>
                <input
                    className='search-auth-user'
                    placeholder={lang.USER_AUTH_PLACEHOLDER}
                    onChange={props.onUsernameChange}
                />

                <input
                    placeholder={lang.USER_AVATAR_PLACEHOLDER}
                    onChange={props.onAvatarChange}
                />
                
                <Button
                    onClick={props.onClick}
                    buttonText={lang.USER_AUTH_BUTTON}
                />
            </div>
        </div>        
    );
};

UserAuth.propTypes = {
    onUserAuthBackground: PropTypes.func,
    onClick: PropTypes.func,
    onUserAuthDiv: PropTypes.func,
    onUsernameChange: PropTypes.func,
    onAvatarChange: PropTypes.func,
};

export default UserAuth;