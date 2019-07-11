import React, { useState, useEffect } from 'react';
import UserInfoContainer from './UserInfoContainer';
import Image from '../shared/Image';
import BackButton from './BackButton';
import GiphyApi from '../../api/GiphyApi';
import { en } from '../../locales/en/en';
import './SingleGif.css';

const SingleGif = (props) => {

    const api = new GiphyApi();
    
    const [gif, setGif] = useState({});

    const goToFrontPage = () => {
        props.history.push('/');
    };

    const getGif = async () => {
        setGif(await api.getSingleGif(props.match.params.id));
    };

    useEffect(() => {
        getGif();
    }, []);

    return (
        <div>
            <div className='Gif_container'>
                <Image class={'Gif_image'} imageSource={gif.originalImgURL} />
            </div>

            {Object.entries(gif).length !== 0 
            ? <div>
                <UserInfoContainer username={gif.username} date={gif.postDate} avatar={gif.avatarUrl} />
                <BackButton onClickFunction={goToFrontPage} backButtonText={en.GIF_BACK_BUTTON} />
            </div> 
            : null }
        </div>        
    );
};

export default SingleGif;