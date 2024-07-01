import {Dimensions} from 'react-native';

let vw = Dimensions.get('window').width;
let vh = Dimensions.get('window').height;

const responsiveVertical = value => {
  const res = vw / (360 / value);
  return res;
};

const responsiveHorizontal = value => {
  const res = (value / 360) * vw;
  return res;
};

export {responsiveVertical, responsiveHorizontal, vw, vh};
