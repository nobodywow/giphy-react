import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './GifUserInfo';
import Image from '../../../common/components/Image';
import Button from '../../../common/components/Button';
import './Gif.css';

const Gif = (props) => {
    return (
        <div>             
            <div className='gif-container'>
                <Image className={'gif-image'} title={props.gif.title} imageSource={props.gif.originalImgUrl} />
            </div>
            <UserInfo gif={props.gif} />            
            <Button onClick={props.onBack} buttonText={props.backButtonText} />
            <Button onClick={props.onDelete} buttonText={props.deleteButtonText} />
        </div>        
    );
};

Gif.propTypes = {
    gif: PropTypes.object,
    onBack: PropTypes.func,
    onDelete: PropTypes.func,
    backButtonText: PropTypes.string,
    deleteButtonText: PropTypes.string,
};

export default Gif;