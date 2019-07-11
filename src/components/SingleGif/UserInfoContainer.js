import React from 'react';
import { getFormattedDate } from '../../utils/dateUtils';

const UserInfoContainer = (props) => {
    return (
        <div>            
            <p>{`Username: ${props.username}`} <span><img src={props.avatar} height='25' width='25' alt=''></img></span></p>
            <p>{`Date: ${getFormattedDate(props.date)}`}</p>
        </div>
    );
};

export default UserInfoContainer;
