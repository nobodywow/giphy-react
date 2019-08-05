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
                <Image className={'gif-image'} title={props.title} imageSource={props.imageSource} />
            </div>
            <UserInfo username={props.username} date={props.date} avatar={props.avatar} />
            <Button onClick={props.onBack} buttonText={props.backButtonText} />
            <Button onClick={props.onDelete} buttonText={props.deleteButtonText} />
        </div>        
    );
};

Gif.propTypes = {
    title: PropTypes.string,
    imageSource: PropTypes.string,
    username: PropTypes.string,
    date: PropTypes.string,
    avatar: PropTypes.string,
    onBack: PropTypes.func,
    onDelete: PropTypes.func,
    backButtonText: PropTypes.string,
    deleteButtonText: PropTypes.string,
};

export default Gif;