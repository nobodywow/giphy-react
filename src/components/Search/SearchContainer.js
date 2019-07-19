import { connect } from 'react-redux';
import Search from './Search';
import { uploadGif } from '../../store/actions';

const mapStateToProps = state => ({
    gifs: state.gifs,    
});

const mapDispatchToProps = dispatch => ({
    uploadGif: (gif) => dispatch(uploadGif(gif)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);