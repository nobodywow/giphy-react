import { connect } from 'react-redux';
import SingleGif from './SingleGif';
import { getSingleGif, deleteGif } from '../../store/actions';

const mapStateToProps = state => ({
    gif: state.currentGif,
    keyword: state.keyword,
});

const mapDispatchToProps = dispatch => ({
    getSingleGif: (id) => dispatch(getSingleGif(id)),
    deleteGif: (id) => dispatch(deleteGif(id)),
});

const SingleGifContainer = connect(mapStateToProps,mapDispatchToProps)(SingleGif);

export default SingleGifContainer;