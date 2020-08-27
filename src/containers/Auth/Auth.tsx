import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {RootState} from '../../reducers/rootReducer';

interface StateProps {
  isLoggedIn: boolean;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isLoggedIn: state.authState.isLoggedIn,
});

const AuthContainer: React.FC<StateProps> = (isLoggedIn, children) => (
  <div>{isLoggedIn ? children : <Redirect to="/auth/signin" />}</div>
);

export default connect(mapStateToProps)(AuthContainer);
