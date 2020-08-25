import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

import Counter from '../../components/Counter/Counter';
import {RootState} from '../../reducers/rootReducer';
import {countActionCreator} from '../../actions/Counter/countActionCreator';

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (addend: number) => void;
  increase: () => void;
  decrease: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  count: state.countState.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      add: addend => countActionCreator.add(addend),
      increase: () => countActionCreator.increase(),
      decrease: () => countActionCreator.decrease(),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
