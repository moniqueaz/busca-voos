export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const colors = {
  primary: '#159177',
  secondary: '#889395',
  black: '#000',
  white: '#fff',
  gray: '#a8aaa9',
  error: '#fe0000',
  infor: '#ddaf29',
  grayLight: '#e9ebec',
  blueLight: '#eef3f9',
};

export const font = {
  desktop: {
    xs: '12px',
    sm: '14px',
    md: '18px',
    lg: '22px',
    xl: '24px',
  },
  mobile: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '22px',
  },
  family: {
    primary: "'Montserrat', sans-serif",
    secondary: "'Baskervville', serif",
  },
};
