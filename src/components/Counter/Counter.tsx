import * as React from 'react';
import {Button, Card, Statistic} from 'semantic-ui-react';

export interface CounterProps {
  count?: number;
  add?: (addend: number) => void;
  increase?: () => void;
  decrease?: () => void;
}

const Counter: React.FC<CounterProps> = ({
  count = 0,
  add = () => {},
  decrease = () => {},
  increase = () => {},
}) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>Beads Count</Statistic.Label>
      <Statistic.Value>{count}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <div>
        <div className="ui two buttons">
          <Button color="red" onClick={decrease}>
            -1
          </Button>
          <Button color="green" onClick={increase}>
            +1
          </Button>
        </div>
      </div>
      <div className="fluid-button">
        <Button fluid color="grey" onClick={() => add(10)}>
          +10
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default Counter;
