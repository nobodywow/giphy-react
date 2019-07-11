import React from 'react';
import { en } from '../../locales/en/en';

const LoadButton = (props) => {
    return (
        <button className='load-button' onClick={props.onLoadButton}>{en.LOAD_BUTTON}</button>
    );
};

export default LoadButton;