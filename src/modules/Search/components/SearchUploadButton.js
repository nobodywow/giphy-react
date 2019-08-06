import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/components/Button';
import { lang } from '../../../locales/config';

const SearchUploadButton = (props) => {
    return (
        <Button
            onClick={props.onClick}
            buttonText={lang.UPLOAD_BUTTON}
        />
    );
};

SearchUploadButton.propTypes = {
    onClick: PropTypes.func,
};

export default SearchUploadButton;