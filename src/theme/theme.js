import {
    responsiveHeight,
    responsiveWidth,
    // responsiveFontSize
} from 'react-native-responsive-dimensions';

const colors = {
    primary: '#F09000',
    secondary: '#16234D',
    describe: '#707070',
    green: '#4EB7BA',
    white: '#fff',
    black: '#000',
    lighter: '#F0F0F0',
    gray: '#BABABA',
};

const sizes = {
    text: '',
    heightToDp: (porcentage) => `${responsiveHeight(porcentage)}px`,
    widthToDp: (porcentage) => `${responsiveWidth(porcentage)}px`,
    padding: `${responsiveWidth(5)}px`,
};

const fonts = {
    light: 'Nunito-Light',
    regular: 'Nunito-Regular',
    semibold: 'Nunito-SemiBold',
    bold: 'Nunito-Bold',
};
  
export const barberTheme = {
    sizes: sizes,
    colors: colors,
    fonts: fonts,
};