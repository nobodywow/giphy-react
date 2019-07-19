import { connect } from 'react-redux';
import Preview from './Preview';
import { getGifs } from '../../store/actions';

const mapStateToProps = state => ({
    loading: state.loading,
    gifs: state.gifs,
    offset: state.offset,
});

const mapDispatchToProps = dispatch => ({
    getGifs: (keyword, limit, offset, isOnLoad) => dispatch(getGifs(keyword, limit, offset, isOnLoad)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);