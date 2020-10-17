export const fetchGeoLocation = async (): Promise<L.LatLngTuple | undefined> => {
  if (!navigator.geolocation) {
    return undefined;
  }

  let position: L.LatLngTuple | undefined;

  const resolve = (pos: Position) => {
    if (!pos.coords.latitude || !pos.coords.longitude) {
      position = undefined;
    }
    position = [pos.coords.latitude, pos.coords.longitude];
  };

  const reject = () => {
    position = undefined;
  };

  await navigator.geolocation.getCurrentPosition(resolve, reject, {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 60,
  });

  return position;
};
