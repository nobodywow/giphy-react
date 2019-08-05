import React from 'react';
import PropTypes from 'prop-types';
import SearchUploadField from './SearchUploadField';
import SearchUploadButton from './SearchUploadButton';

const SearchUpload = (props) => {
    return (
        <div className='upload'>
                <SearchUploadField
                    onChange={props.onFileChange}
                />
                <SearchUploadButton
                    onClick={props.onClick}
                    text={props.text}
                />                
        </div>
    );
};

SearchUpload.propTypes = {
    onFileChange: PropTypes.func,
    onClick: PropTypes.func,
    text: PropTypes.string,
};

export default SearchUpload;