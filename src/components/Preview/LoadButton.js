import React from 'react';
import PropTypes from 'prop-types'
import { en } from '../../locales/en/en';

const LoadButton = (props) => {
    return (
        <button className='load-button' onClick={props.onLoadButton}>{en.LOAD_BUTTON}</button>
    );
};

LoadButton.propTypes = {
    onLoadButton: PropTypes.func,
};

export default LoadButton;