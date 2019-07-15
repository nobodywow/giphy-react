import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Image from '../shared/Image';
import LoadButton from './LoadButton';
import './Preview.css';
import { getGifs } from '../../store/actions';

const GIF_LIMIT = 5;
const GIF_OFFSET = 5;

const Preview = (props) => {

    const getQueryParameter = () => {
        const values = queryString.parse(props.location.search);
        return values.q.split('+').join('');
    };

    useEffect(() => {
        if (GIF_OFFSET > props.offset) {
            props.getGifs(getQueryParameter(), GIF_LIMIT, GIF_OFFSET);
        }
    }, []);

    const loadMoreGifs = () => {
        props.getGifs(getQueryParameter(), GIF_LIMIT, GIF_OFFSET);
    };

    const goToSingleGif = (gifData) => {
        props.history.push(`/gif/${gifData.id}`); 
    };    

    return (
        <div className='Preview'>
            <div className='Preview_container'>
                {
                    props.gifs.map(item => <Link to={`/gif/${item.id}`} key={item.id}> <Image class={'Grid_item'} imageSource={item.previewImgURL} onClick={() => goToSingleGif(item)} /></Link>)
                }
            </div>        
            <LoadButton onLoadButton={() => loadMoreGifs(getQueryParameter())}/>
        </div>        
    );    
};

const mapStateToProps = state => ({
    gifs: state.gifs,
    offset: state.offset,
});

const mapDispatchToProps = dispatch => ({
    getGifs: (keyword, limit, GIF_OFFSET) => dispatch(getGifs(keyword, limit, GIF_OFFSET)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);