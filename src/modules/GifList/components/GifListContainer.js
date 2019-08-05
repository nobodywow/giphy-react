import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import GifList from './GifList';
import LoadingOverlay from 'react-loading-overlay';
import Button from '../../../common/components/Button';
import ErrorMessage from '../../../common/components/ErrorMessage';
import { convertQueryToKeyword } from '../../../utils/stringUtils';
import { gifListActions } from '../gifList.actions';
import { lang } from '../../../locales/config';

const GifListContainer = (props) => {

    const GIF_LIMIT = 5;
    const GIF_OFFSET = 5;

    const getQueryParameter = () => convertQueryToKeyword(queryString.parse(props.location.search).q);
    
    const loadMoreGifs = () => {
        props.getGifs(getQueryParameter(), GIF_LIMIT, GIF_OFFSET);
    };    

    const onLoadMore = useCallback(
        () => {
            loadMoreGifs();
        }, [],
    );

    useEffect(() => {
        if (props.gifs.length === 0) {
            loadMoreGifs();
        }
    }, []);

    return (
        <div className='preview'>
            <LoadingOverlay
              active={props.loading}
              spinner
              text='loading...'
            >
                {
                    props.gifs.length === 0
                    ? <ErrorMessage errorMessage={lang.ERROR_MESSAGE} />
                    : <GifList gifs={props.gifs}/>
                }
            </LoadingOverlay>            
            <Button onClick={onLoadMore} buttonText={lang.LOAD_BUTTON} />
        </div> 
    );
}

GifListContainer.propTypes = {
    location: PropTypes.object,
    getGifs: PropTypes.func,
    history: PropTypes.object,
    gifs: PropTypes.array,
    loading: PropTypes.bool,
};

const mapStateToProps = state => ({
    loading: state.loading,
    gifs: state.gifs,
});

const mapDispatchToProps = dispatch => ({
    getGifs: (keyword, limit, offset) => dispatch(gifListActions.getGifs.fetch({ keyword, limit, offset })),
});

export default connect(mapStateToProps, mapDispatchToProps)(GifListContainer);