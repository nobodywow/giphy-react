import { connect } from 'react-redux';
import SingleGif from './SingleGif';
import { actionCreators } from '../../store/actions';

const mapStateToProps = state => ({
    gif: state.currentGif,
    keyword: state.keyword,
});

const mapDispatchToProps = dispatch => ({
    getSingleGif: (id) => dispatch(actionCreators.getSingleGif(id)),
    deleteGif: (id) => dispatch(actionCreators.deleteGif(id)),
});

const SingleGifContainer = connect(mapStateToProps,mapDispatchToProps)(SingleGif);

export default SingleGifContainer;