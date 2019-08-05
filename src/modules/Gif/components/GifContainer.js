import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Gif from './Gif';
import ErrorMessage from '../../../common/components/ErrorMessage';
import { gifActions } from '../gif.actions';
import { lang } from '../../../locales/config';
import { paths, constructPath } from '../../../routes/paths';

const GifContainer = (props) => {
    const goToFrontPage = () => {
        props.history.push(constructPath(paths.front));
    };

    const deleteButtonHandler = () => {
        props.history.push(constructPath(paths.search, { q: props.keyword }));
        props.deleteGif(props.gif.id);
    };

    useEffect(() => {
        props.getSingleGif(props.match.params.id);
    }, []);

    return (
        Object.entries(props.gif).length !== 0
        ? <Gif
            username={props.gif.username}
            date={props.gif.postDate}
            avatar={props.gif.avatarUrl}
            title={props.gif.title}
            imageSource={props.gif.originalImgUrl}
            onBack={goToFrontPage}  
            onDelete={deleteButtonHandler}
            backButtonText={lang.GIF_BACK_BUTTON}
            deleteButtonText={lang.GIF_DELETE_BUTTON}
            />
            
        : <ErrorMessage errorMessage={lang.ERROR_MESSAGE} />
    );
}

GifContainer.propTypes = {
    keyword: PropTypes.string,
    deleteGif: PropTypes.func,
    gif: PropTypes.object,
    match: PropTypes.object,
    history: PropTypes.object,
    getSingleGif: PropTypes.func,
};

const mapStateToProps = state => ({
    gif: state.currentGif,
    keyword: state.keyword,
});

const mapDispatchToProps = dispatch => ({
    getSingleGif: (id) => dispatch(gifActions.getGif.fetch({ id })),
    deleteGif: (id) => dispatch(gifActions.deleteGif({ id })),
});


export default connect(mapStateToProps,mapDispatchToProps)(GifContainer);