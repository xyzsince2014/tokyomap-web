import * as React from 'react';

import Clock from '../../components/Clock/Clock';

const useClock = () => {
  const fetchCurrentDatetime = () =>
    new Date()
      .toLocaleString('en-GB', {
        hour12: false,
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
      })
      .replace(',', '');

  const [time, setTime] = React.useState<string>(fetchCurrentDatetime());

  const tick = () => {
    setTime(fetchCurrentDatetime());
  };

  React.useEffect(() => {
    const timer = setInterval(tick, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
};

const ClockContainer: React.FC<{}> = () => <Clock datetime={useClock()} />;

export default ClockContainer;
