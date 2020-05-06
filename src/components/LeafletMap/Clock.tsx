import * as React from 'react';

// todo: update the time display every minute
const Clock: React.FC = () => {
  const datetime: string = new Date()
    .toLocaleString('en-GB', {
      // see detail here http://www.htmq.com/js/date_toLocaleString.shtml
      hour12: false,
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
    })
    .replace(',', '');

  return <div className="c-clock">{datetime}</div>;
};

export default Clock;
