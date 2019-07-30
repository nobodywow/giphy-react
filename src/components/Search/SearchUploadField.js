import React from 'react';
import PropTypes from 'prop-types';

const SearchUploadField = (props) => {
    return (
        <input
            type='file'
            onChange={props.onChange}
        />        
    );
};

SearchUploadField.propTypes = {
    onChange: PropTypes.func,
};

export default SearchUploadField;