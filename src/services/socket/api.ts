export const getGeolocationFactory = () => {
  const getGeolocation = (): Promise<L.LatLngTuple> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos: Position) => resolve([pos.coords.latitude, pos.coords.longitude]),
        reject,
        {
          enableHighAccuracy: true,
          timeout: 1000 * 10,
          maximumAge: 1000 * 60,
        },
      );
    });
  };

  return getGeolocation;
};
