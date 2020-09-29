import L from 'leaflet';

import iconImage from '../../assets/images/icons/leaf-green.png';
import iconShadow from '../../assets/images/icons/leaf-shadow.png';

const CustomIcon = new L.Icon({
  iconUrl: iconImage,
  shadowUrl: iconShadow,
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
  className: 'c-custom-icon',
});

export default CustomIcon;
