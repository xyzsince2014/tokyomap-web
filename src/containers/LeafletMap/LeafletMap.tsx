import * as React from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators, Dispatch} from 'redux';

import {RootState} from '../../reducers/rootReducer';
// import {authActionCreator} from '../../actions/Auth/authActionCreator';
import LeafletMap, {LeafletMapProps} from '../../components/LeafletMap/LeafletMap';

interface StateProps {
  isLoggedIn: boolean;
}

// interface DispatchProps {
//   getIsLoggedIn: () => void;
// }

type EnhancedIndexProps = LeafletMapProps & StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
  isLoggedIn: state.authState.isLoggedIn,
});

// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
//   bindActionCreators(
//     {
//       getIsLoggedIn: () => authActionCreator.login(),
//     },
//     dispatch,
//   );

const LeafletMapContainer: React.FC<EnhancedIndexProps> = ({isLoggedIn}) => {
  if (!isLoggedIn) {
    window.location.href = '/auth';
  }

  return (
    <div>
      <LeafletMap />
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);
export default connect(mapStateToProps)(LeafletMapContainer);
