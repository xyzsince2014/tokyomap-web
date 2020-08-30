import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Route} from 'react-router';

import {RootState} from '../../reducers/rootReducer';
import {authActionCreator} from '../../actions/Auth/authActionCreator';
import SignIn from '../../components/Auth/SignIn';

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

  return <div>{isLoggedIn ? children : <Route path="/" component={SignIn} />}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
