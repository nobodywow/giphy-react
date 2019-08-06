import React from 'react';
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button className={props.className} onClick={props.onClick} disabled={props.isDisabled}>{props.buttonText}</button>
    );
};

Button.propTypes = {
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    buttonText: PropTypes.string,
};

export default Button;