import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

import Counter from '../../components/Counter/Counter';
import {RootState} from '../../reducers/rootReducer';
import {calculateCount} from '../../actions/countActionCreators';

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
      add: addend => calculateCount.add(addend),
      increase: () => calculateCount.increase(),
      decrease: () => calculateCount.decrease(),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
