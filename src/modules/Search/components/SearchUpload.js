import React from 'react';
import PropTypes from 'prop-types';
import SearchUploadField from './SearchUploadField';
import SearchUploadButton from './SearchUploadButton';
import SearchUploadUserButton from './SearchUploadUserButton';

const SearchUpload = (props) => {
    return (
        <div className='upload'>
                <SearchUploadField
                    onChange={props.onFileChange}
                />
                <SearchUploadButton
                    onClick={props.onClick}
                />
                <SearchUploadUserButton
                    onClick={props.onUserClick}
                />
        </div>
    );
};

SearchUpload.propTypes = {
    onFileChange: PropTypes.func,
    onClick: PropTypes.func,
    onUserClick: PropTypes.func,
};

export default SearchUpload;