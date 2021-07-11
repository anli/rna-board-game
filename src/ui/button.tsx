import {
  color,
  ColorProps,
  createRestyleComponent,
  createVariant,
  SpacingProps,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import {Theme} from '@themes';
import React from 'react';
import {Button as ButtonNative} from 'react-native-paper';

const variant = createVariant({themeKey: 'buttonVariants'});
export type ButtonProps = SpacingProps<Theme> &
  ColorProps<Theme> &
  VariantProps<Theme, 'buttonVariants'> &
  React.ComponentProps<typeof ButtonNative>;

const restyleFunctions = [variant as any, color];

const Component = createRestyleComponent<ButtonProps, Theme>(
  [variant],
  ButtonNative,
);

export const Button = ({children, ...rest}: ButtonProps) => {
  const props = useRestyle(restyleFunctions, rest) as any;
  const buttonColor = props?.style?.find(() => true).color;

  return (
    <Component color={buttonColor} {...props}>
      {children}
    </Component>
  );
};
