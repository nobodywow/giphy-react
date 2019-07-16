import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../shared/Image';
import LoadButton from './LoadButton';
import './Preview.css';
import { getGifs } from '../../store/actions';
import ErrorMessage from '../shared/ErrorMessage';
import { convertQueryToKeyword } from '../../utils/stringUtils';

const GIF_LIMIT = 5;
const GIF_OFFSET = 5;

const Preview = (props) => {

    const getQueryParameter = () => convertQueryToKeyword(queryString.parse(props.location.search).q);

    useEffect(() => {
        if (GIF_OFFSET > props.offset) {
            props.getGifs(getQueryParameter(), GIF_LIMIT, GIF_OFFSET);
        }
    }, []);

    const loadMoreGifs = () => {
        props.getGifs(getQueryParameter(), GIF_LIMIT, GIF_OFFSET);
    };

    const handleButtonClick = useCallback(
        () => {
            loadMoreGifs(getQueryParameter());
        }, [],
    );

    return (
        <div className='preview'>
            <div className='preview-container'>
                {
                    props.gifs.length === 0
                    ? <ErrorMessage errorMessage={'No gifs found'} />
                    : props.gifs.map(item => 
                        <Link to={`/gif/${item.id}`} key={item.id}>
                            <Image class={'grid-item'} title={item.title} imageSource={item.previewImgUrl} />
                        </Link>
                    )
                }
            </div>        
            <LoadButton onLoadButton={handleButtonClick}/>
        </div>        
    );    
};

Preview.propTypes = {
    location: PropTypes.object,
    offset: PropTypes.node,
    getGifs: PropTypes.func,
    history: PropTypes.object,
    gifs: PropTypes.array,
};

const mapStateToProps = state => ({
    gifs: state.gifs,
    offset: state.offset,
});

const mapDispatchToProps = dispatch => ({
    getGifs: (keyword, limit, GIF_OFFSET) => dispatch(getGifs(keyword, limit, GIF_OFFSET)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);