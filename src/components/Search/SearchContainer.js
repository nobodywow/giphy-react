import { connect } from 'react-redux';
import Search from './Search';
import { actionCreators } from '../../store/actions';

const mapStateToProps = state => ({
    gifs: state.gifs,    
});

const mapDispatchToProps = dispatch => ({
    resetKeyword: (keyword) => dispatch(actionCreators.keywordChange(keyword)),
    uploadGif: (gif) => dispatch(actionCreators.uploadGif(gif)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);