import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import GiphyApi from '../../api/GiphyApi';
import { Link } from 'react-router-dom';
import Image from '../shared/Image';
import LoadButton from './LoadButton';
import './Preview.css';

const GIF_LIMIT = 5;
const GIF_OFFSET = 5;

const Preview = (props) => {
    
    const api = new GiphyApi();
    
    const [gifs, setGifs] = useState([]);
    const [gifOffset, setOffset] = useState(0);

    const getQueryParameter = () => {
        const values = queryString.parse(props.location.search);
        return values.q.split('+').join('');
    };

    useEffect(() => {       
        getGifs(getQueryParameter());
    }, []);


    const getGifs = async (keyword) => {
        let offsetArray = await api.getGifArray(keyword, GIF_LIMIT, gifOffset);
        setGifs([ ...gifs, ...offsetArray ]);
        setOffset(gifOffset + GIF_OFFSET);
    };

    const goToSingleGif = (gifData) => {
        props.history.push(`/gif/${gifData.id}`);
    };

    return (
        <div className='Preview'>
            <div className='Preview_container'>
                {
                    gifs.map(item => <Link to={`/gif/${item.id}`} key={item.id}> <Image class={'Grid_item'} imageSource={item.previewImgURL} onClick={() => goToSingleGif(item)} /></Link>)
                }
            </div>        
            <LoadButton onLoadButton={() => getGifs(getQueryParameter())}/>
        </div>
        
    );

};

export default Preview;