import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/components/Button';
import { lang } from '../../../locales/config';


const SearchUploadUserButton = (props) => {
    return (
        <Button
            onClick={props.onClick}
            buttonText={lang.USER_INFO_BUTTON}
        />
    );
};

SearchUploadUserButton.propTypes = {
    onClick: PropTypes.func,
};

export default SearchUploadUserButton;