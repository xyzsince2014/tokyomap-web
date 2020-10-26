export const getGeolocationFactory = () => {
  const getGeolocation = (): Promise<L.LatLngTuple> | void => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos: Position) => resolve([pos.coords.latitude, pos.coords.longitude]),
        (err: PositionError) => reject(new Error(`${err}`)),
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
