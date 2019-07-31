import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import Image from '../shared/Image';
import Button from '../shared/Button';
import { lang } from '../../locales/config';
import { endpoints, constructPath } from '../../routes/endpoints';
import ErrorMessage from '../shared/ErrorMessage';
import './SingleGif.css';

const SingleGif = (props) => {

    const goToFrontPage = () => {
        props.history.push(constructPath(endpoints.front));
    };

    const deleteButtonHandler = () => {
        props.history.push(constructPath(endpoints.search, { q: props.keyword }));
        props.deleteGif(props.gif.id);
    };

    useEffect(() => {
        props.getSingleGif(props.match.params.id);
    }, []);

    return (
        <div>
            {
                Object.entries(props.gif).length !== 0 
                ? <div>
                    <div className='gif-container'>
                        <Image className={'gif-image'} title={props.gif.title} imageSource={props.gif.originalImgUrl} />
                    </div>
                    <UserInfo username={props.gif.username} date={props.gif.postDate} avatar={props.gif.avatarUrl} />
                    <Button onClickFunction={goToFrontPage} buttonText={lang.GIF_BACK_BUTTON} />
                    <Button onClickFunction={deleteButtonHandler} buttonText={lang.GIF_DELETE_BUTTON} />
                </div> 
                : <ErrorMessage errorMessage={lang.ERROR_MESSAGE} />
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