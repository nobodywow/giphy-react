import React from 'react';
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button className={props.className} onClick={props.onClickFunction}>{props.buttonText}</button>
    );
};

Button.propTypes = {
    onLoadButton: PropTypes.func,
    className: PropTypes.string,
    buttonText: PropTypes.string,
};

export default Button;