import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserInfoContainer from './UserInfoContainer';
import Image from '../shared/Image';
import BackButton from './BackButton';
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
            <div className='gif-container'>
                <Image className={'gif-image'} title={props.gif.title} imageSource={props.gif.originalImgUrl} />
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

SingleGif.propTypes = {
    gif: PropTypes.object,
    match: PropTypes.object,
    history: PropTypes.object,
    getSingleGif: PropTypes.func,
};

const mapStateToProps = state => ({
    gif: state.currentGif
});

const mapDispatchToProps = dispatch => ({
    getSingleGif: (id) => dispatch(getSingleGif(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleGif);