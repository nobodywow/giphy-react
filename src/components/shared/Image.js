import React from 'react';

const Image = (props) => {    
    return (
        <img className={props.class} src={props.imageSource} alt=''></img>
    );
};

export default Image;

