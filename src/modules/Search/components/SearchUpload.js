import React from 'react';
import PropTypes from 'prop-types';
import SearchUploadField from './SearchUploadField';
import SearchUploadButton from './SearchUploadButton';
import Button from '../../../common/components/Button';
import SearchUploadTagsField from './SearchUploadTagField';

const SearchUpload = (props) => {
    return (
        <div className='upload'>
            {
                props.isShowUpload
                ? <>
                    <SearchUploadField
                        onChange={props.onFileChange}
                    />
                    <SearchUploadTagsField
                        onChange={props.onTagsChange}
                    />
                    <SearchUploadButton
                        onClick={props.onClick}
                    />
                  </>
                : <Button
                    onClick={props.onShowUpload}
                    buttonText={'upload'}
                  />
            }            
        </div>
    );
};

SearchUpload.propTypes = {
    onTagsChange: PropTypes.func,
    isShowUpload: PropTypes.bool,
    onShowUpload: PropTypes.func,
    onFileChange: PropTypes.func,
    onClick: PropTypes.func,
    onSignIn: PropTypes.func,
};

export default SearchUpload;