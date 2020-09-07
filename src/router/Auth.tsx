import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Route} from 'react-router';

import {RootState} from '../reducers/rootReducer';
import {authenticate} from '../actions/Auth/authActionCreator';
import SignIn from '../components/Signin/Signin';

interface StateProps {
  isAuthorised: boolean;
}

interface DispatchProps {
  getIsAuthorised: () => void;
}

type EnhancedAuthProps = StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  isAuthorised: state.authState.isAuthorised,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getIsAuthorised: () => authenticate.begin(),
    },
    dispatch,
  );

const AuthContainer: React.FC<EnhancedAuthProps> = ({isAuthorised, getIsAuthorised, children}) => {
  React.useEffect(() => {
    getIsAuthorised();
  }, []);

  return <div>{isAuthorised ? children : <Route path="/" component={SignIn} />}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
