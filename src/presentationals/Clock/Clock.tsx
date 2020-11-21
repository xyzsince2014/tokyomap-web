import * as React from 'react';

interface ClockProps {
  datetime: string;
}

const Clock: React.FC<ClockProps> = ({datetime}) => <div className="c-clock">{datetime}</div>;

export default Clock;
