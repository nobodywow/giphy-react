import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
    return (
        <p>{props.errorMessage}</p>
    );
};

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string
};

export default ErrorMessage;