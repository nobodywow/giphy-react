import React, { useCallback, useEffect } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import PropTypes from 'prop-types';
import Image from '../shared/Image';
import Button from '../shared/Button';
import ErrorMessage from '../shared/ErrorMessage';
import { convertQueryToKeyword } from '../../utils/stringUtils';
import { lang } from '../../locales/config';
import './Preview.css';


const Preview = (props) => {
    
    const GIF_LIMIT = 5;
    const GIF_OFFSET = 5;

    const getQueryParameter = () => convertQueryToKeyword(queryString.parse(props.location.search).q);
    
    const loadMoreGifs = () => {
        props.getGifs(getQueryParameter(), GIF_LIMIT, GIF_OFFSET);
    };
 
    useEffect(() => {
        if (props.gifs.length === 0) {
            loadMoreGifs();
        }
    }, []);

    const handleButtonClick = useCallback(
        () => {
            loadMoreGifs();
        }, [],
    );

    return (
        <div className='preview'>
            <LoadingOverlay
              active={props.loading}
              spinner
              text='loading...'
            >
                <div className='preview-container'>
                    {
                        props.gifs.length === 0
                        ? <ErrorMessage errorMessage={lang.ERROR_MESSAGE} />
                        : props.gifs.map(item => 
                            <Link to={`/gif/${item.id}`} key={item.id}>
                                <Image class={'grid-item'} title={item.title} imageSource={item.previewImgUrl} />
                            </Link>
                        )
                    }
                </div>
            </LoadingOverlay>            
            <Button onClickFunction={handleButtonClick} buttonText={lang.LOAD_BUTTON} />
        </div>        
    );    
};

Preview.propTypes = {
    location: PropTypes.object,
    getGifs: PropTypes.func,
    history: PropTypes.object,
    gifs: PropTypes.array,
    loading: PropTypes.bool,
};


export default Preview;