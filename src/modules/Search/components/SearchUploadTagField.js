import React from 'react';
import PropTypes from 'prop-types';
import { lang } from '../../../locales/config';

const SearchUploadTagsField = (props) => {
    return (
        <input
            className='upload-tags-input'
            onChange={props.onChange}
            placeholder={lang.UPLOAD_TAGS_PLACEHOLDER}
        />        
    );
};

SearchUploadTagsField.propTypes = {
    onChange: PropTypes.func,
};

export default SearchUploadTagsField;