import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';

// import pages from './pages';

import {authenticate} from '../actions/Auth/authActionCreator';
import {RootState} from '../reducers/rootReducer';
import Auth from './Auth';

import LeafletMap from '../containers/LeafletMap/LeafletMap';
import Spinner from '../components/common/Spinner';

interface StateProps {
  isLoading: boolean;
  isAuthorised: boolean;
}

interface DispatchProps {
  getIsAuthorised: () => void;
}

type EnhancedRouterProps = StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  isLoading: state.authState.isLoading,
  isAuthorised: state.authState.isAuthorised,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getIsAuthorised: () => authenticate.begin(),
    },
    dispatch,
  );

const Router: React.FC<EnhancedRouterProps> = ({
  isLoading = true,
  isAuthorised = false,
  getIsAuthorised,
}) => {
  React.useEffect(() => {
    getIsAuthorised();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <Switch>
        <Auth isAuthorised={isAuthorised}>
          <Route path="/" component={LeafletMap} />
          <Redirect to="/" />
        </Auth>
      </Switch>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
