import hexToRgba from 'hex-to-rgba';

const primary = '#eca154';
const secondary = '#696158';
const tertiary = '#e5e5e5';

const black = '#05091E';
const white = '#fff';
const gray = '#707070';
const generatePrimaryShades = (alpha = 1) => {
  return hexToRgba(primary, alpha);
};

const generateShades = (color = primary, alpha = 0.5) => {
  return hexToRgba(color, alpha);
};

const generateBlackShades = (alpha = 0.5) => {
  return hexToRgba(black, alpha);
};

const generateWhiteShades = (alpha = 0.5) => {
  return hexToRgba(white, alpha);
};

//=> 'rgb(0 0 0)'
export default {
  primary,
  white,
  gray,
  secondary,
  tertiary,
  danger: '#E15656',
  success: '#5FBE83',
  yellow: '#f8cf00',
  black,
  primaryRGB: generatePrimaryShades,
  blackRGB: generateBlackShades,
  whiteRGB: generateWhiteShades,
  generateShades,
};