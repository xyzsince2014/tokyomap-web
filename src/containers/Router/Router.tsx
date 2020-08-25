import {connect} from 'react-redux';

import Router from '../../components/Router/Router';
import {RootState} from '../../reducers/rootReducer';

interface StateProps {
  isLoggedIn: boolean;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isLoggedIn: state.authState.isLoggedIn,
});

export default connect(mapStateToProps)(Router);
