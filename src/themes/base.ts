import * as tokens from '@shopify/polaris-tokens';
import {createTheme, TextProps} from '@shopify/restyle';
import {ButtonProps, IconButtonProps, ScreenProps, TextInputProps} from '@ui';

const pxToNumber = (px: string) => {
  return parseInt(px.replace('px', ''), 10);
};

const base = {
  breakpoints: {
    largeTablet: 1024,
    longPhone: {
      height: 812,
      width: 0,
    },
    phone: 0,
    tablet: 768,
  },
  colors: {
    background: tokens.colorWhite,
    danger: tokens.colorRed,
    onBackground: tokens.colorBlack,
    primary: tokens.colorIndigo,
  },
  spacing: {
    xl: pxToNumber(tokens.spacingExtraLoose),
    l: pxToNumber(tokens.spacingLoose),
    m: pxToNumber(tokens.spacingBase),
    none: 0,
    s: pxToNumber(tokens.spacingBaseTight),
    xs: pxToNumber(tokens.spacingExtraTight),
  },
};

type BaseThemeType = typeof base & {
  iconButtonVariants: {[key: string]: Omit<IconButtonProps, 'icon'>};
  screenVariants: {[key: string]: ScreenProps};
  textVariants: {[key: string]: TextProps<typeof base>};
  textInputVariants: {[key: string]: TextInputProps};
  buttonVariants: {[key: string]: Omit<ButtonProps, 'children'>};
};

export const baseTheme: BaseThemeType = createTheme<BaseThemeType>({
  ...base,
  buttonVariants: {
    defaults: {
      color: 'primary',
    },
  },
  iconButtonVariants: {
    defaults: {
      color: 'primary',
    },
  },
  screenVariants: {
    defaults: {
      backgroundColor: 'background',
      flex: 1,
    },
  },
  textInputVariants: {
    defaults: {
      fontSize: 21,
    },
  },
  textVariants: {
    paragraph: {
      color: 'onBackground',
      fontSize: 16,
      lineHeight: 16 * 1.7,
    },
    subtitle: {
      color: 'onBackground',
      fontSize: 21,
      fontWeight: 'bold',
      lineHeight: 21 * 1.7,
    },
    title: {
      color: 'onBackground',
      fontSize: 37,
      fontWeight: 'bold',
      lineHeight: 37 * 1.7,
    },
  },
});
