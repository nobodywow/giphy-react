import React from 'react';
import PropTypes from 'prop-types';

const SearchUploadButton = (props) => {
    return (
        <button
            onClick={props.onClick}
        >
        {props.text}
        </button>
    );
};

SearchUploadButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
};

export default SearchUploadButton;