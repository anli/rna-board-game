import * as tokens from '@shopify/polaris-tokens';
import {createTheme} from '@shopify/restyle';

const pxToNumber = (px: string) => {
  return parseInt(px.replace('px', ''), 10);
};

export const baseTheme = createTheme({
  colors: {
    background: tokens.colorWhite,
    onBackground: tokens.colorBlack,
    danger: tokens.colorRed,
    primary: tokens.colorIndigo,
  },
  spacing: {
    none: 0,
    xs: pxToNumber(tokens.spacingExtraTight),
    s: pxToNumber(tokens.spacingBaseTight),
    m: pxToNumber(tokens.spacingBase),
    l: pxToNumber(tokens.spacingLoose),
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    title: {
      fontWeight: 'bold',
      fontSize: 37,
      lineHeight: 37 * 1.7,
      color: 'onBackground',
    },
    subtitle: {
      fontWeight: 'bold',
      fontSize: 21,
      lineHeight: 21 * 1.7,
      color: 'onBackground',
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 16 * 1.7,
      color: 'onBackground',
    },
  },
});
