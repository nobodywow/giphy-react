import React from 'react';

const BackButton = (props) => {
    return (
        <button className="back-button" onClick={props.onClickFunction}>{props.backButtonText}</button> 
    );
};

export default BackButton;