import { connect } from 'react-redux';
import Preview from './Preview';
import { actionCreators } from '../../store/actions';

const mapStateToProps = state => ({
    loading: state.loading,
    gifs: state.gifs,
});

const mapDispatchToProps = dispatch => ({
    getGifs: (keyword, limit, offset) => dispatch(actionCreators.getGifs(keyword, limit, offset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);