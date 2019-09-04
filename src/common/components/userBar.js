import React from 'react';
import PropTypes from 'prop-types';
import './userBar.css';
import Button from './Button';


const UserBar = (props) => {
    return (
        <div className='userbar'>
            {props.isAuth 
            ? <>
                <span>{props.username}</span>
                <img src={props.avatarUrl} height='25' width='25' alt={'avatar'} />
                <Button
                    onClick={props.onSignOut}
                    buttonText={'sign out'}
                />
              </>
            : <Button
                onClick={props.onSignIn}
                buttonText={'sign in'}
              />
            }
            
        </div>
    );
};

UserBar.propTypes = {
    isAuth: PropTypes.bool,
    onSignIn: PropTypes.func,
    onSignOut: PropTypes.func,
    username: PropTypes.string,
    avatarUrl: PropTypes.string,
};

export default UserBar;