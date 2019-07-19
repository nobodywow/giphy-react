import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserInfoContainer from './UserInfoContainer';
import Image from '../shared/Image';
import Button from '../shared/Button';
import { en } from '../../locales/en/en';
import ErrorMessage from '../shared/ErrorMessage';
import './SingleGif.css';

const SingleGif = (props) => {

    const goToFrontPage = useCallback(
        () => {
            props.history.push('/');
        }, [],
    );

    const deleteButtonHandler = useCallback(
        () => {
            props.history.push(`/search?q=${props.keyword}`);
            props.deleteGif(props.gif.id);
        }, [],
    );

    useEffect(() => {
        props.getSingleGif(props.match.params.id);
    }, []);

    return (
        <div>
            <div className='gif-container'>
                <Image className={'gif-image'} title={props.gif.title} imageSource={props.gif.originalImgUrl} />
            </div>
            {
                Object.entries(props.gif).length !== 0 
                ? <div>
                    <UserInfoContainer username={props.gif.username} date={props.gif.postDate} avatar={props.gif.avatarUrl} />
                    <Button onClickFunction={goToFrontPage} buttonText={en.GIF_BACK_BUTTON} />
                    <Button onClickFunction={deleteButtonHandler} buttonText={en.GIF_DELETE_BUTTON} />
                </div> 
                : <ErrorMessage errorMessage={en.ERROR_MESSAGE} />
            }
        </div>        
    );
};

SingleGif.propTypes = {
    keyword: PropTypes.string,
    deleteGif: PropTypes.func,
    gif: PropTypes.object,
    match: PropTypes.object,
    history: PropTypes.object,
    getSingleGif: PropTypes.func,
};

export default SingleGif;