import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/components/Button';
import { lang } from '../../../locales/config';

const SearchButton = (props) => {
    return (
        <Button
            className='search-button'
            onClick={props.onClick}
            isDisabled={props.isDisabled}
            buttonText={lang.SEARCH_BUTTON}
        />
    );
};

SearchButton.propTypes = {
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    input: PropTypes.string,
};

export default SearchButton;