import * as React from 'react';

interface ClockProps {
  datetime: string;
}

const Clock: React.FC<ClockProps> = ({datetime}) => <div className="p-clock">{datetime}</div>;

export default Clock;
