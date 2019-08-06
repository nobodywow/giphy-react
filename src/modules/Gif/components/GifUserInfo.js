import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../../../utils/dateUtils';

const UserInfo = (props) => {
    return (
        <div>            
            <p>{`Username: ${props.gif.username}`} <span><img src={props.gif.avatarUrl} height='25' width='25' alt={props.gif.username}></img></span></p>
            <p>{`Date: ${getFormattedDate(props.gif.postDate)}`}</p>
        </div>
    );
};

UserInfo.propTypes = {
    gif: PropTypes.object,
};

export default UserInfo;
