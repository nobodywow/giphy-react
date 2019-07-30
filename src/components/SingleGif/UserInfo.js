import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../../utils/dateUtils';

const UserInfo = (props) => {
    return (
        <div>            
            <p>{`Username: ${props.username}`} <span><img src={props.avatar} height='25' width='25' alt={props.username}></img></span></p>
            <p>{`Date: ${getFormattedDate(props.date)}`}</p>
        </div>
    );
};

UserInfo.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    date: PropTypes.string,
};

export default UserInfo;
