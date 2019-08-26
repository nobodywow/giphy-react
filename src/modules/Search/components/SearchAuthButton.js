import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/components/Button';
import { lang } from '../../../locales/config';

const SearchAuthButton = (props) => {
    return (
        <Button
            onClick={props.onClick}
            buttonText={lang.USER_AUTH_BUTTON}
        />
    );
};

SearchAuthButton.propTypes = {
    onClick: PropTypes.func,
};

export default SearchAuthButton;