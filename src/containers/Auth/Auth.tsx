import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {RootState} from '../../reducers/rootReducer';
import {authActionCreator} from '../../actions/Auth/authActionCreator';

interface StateProps {
  isLoggedIn: boolean;
}

interface DispatchProps {
  getIsLoggedIn: () => void;
}

type EnhancedAuthProps = StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  isLoggedIn: state.authState.isLoggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getIsLoggedIn: () => authActionCreator.login(),
    },
    dispatch,
  );

const AuthContainer: React.FC<EnhancedAuthProps> = ({isLoggedIn, getIsLoggedIn, children}) => {
  React.useEffect(() => {
    getIsLoggedIn();
  }, []);

  return <div>{isLoggedIn ? children : <Redirect to="/auth/signin" />}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
