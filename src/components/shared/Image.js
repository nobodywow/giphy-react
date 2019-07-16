import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {    
    return (
        <video className={props.className} src={props.imageSource} title={props.title} type={'video/mp4'} autoPlay muted loop ></video>
    );
};

Image.propTypes = {
    className: PropTypes.string,
    imageSource: PropTypes.string,
    title: PropTypes.string,
};

export default Image;

