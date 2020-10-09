export const formatDateTime = (datetime: string) => datetime.replace('T', ' ').replace('.000Z', '');

export const fetchCurrentTime = () => new Date();

export const fetchCurrentDatetime = () =>
  new Date()
    .toLocaleString('en-GB', {
      hour12: false,
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
    })
    .replace(',', '');
