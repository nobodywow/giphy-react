import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import UserInfoContainer from './UserInfoContainer';
import Image from '../shared/Image';
import BackButton from './BackButton';
import GiphyApi from '../../api/GiphyApi';
import { en } from '../../locales/en/en';
import { getSingleGif } from '../../store/actions'
import './SingleGif.css';

const SingleGif = (props) => {

    const goToFrontPage = () => {
        props.history.push('/');
    };

    useEffect(() => {
        props.getSingleGif(props.match.params.id);
    }, []);

    return (
        <div>
            <div className='Gif_container'>
                <Image class={'Gif_image'} imageSource={props.gif.originalImgURL} />
            </div>
            {
                Object.entries(props.gif).length !== 0 
                ? <div>
                    <UserInfoContainer username={props.gif.username} date={props.gif.postDate} avatar={props.gif.avatarUrl} />
                    <BackButton onClickFunction={goToFrontPage} backButtonText={en.GIF_BACK_BUTTON} />
                </div> 
                : null 
            }
        </div>        
    );
};

const mapStateToProps = state => ({
    gif: state.currentGif
});

const mapDispatchToProps = dispatch => ({
    getSingleGif: (id) => dispatch(getSingleGif(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleGif);