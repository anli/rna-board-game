import {
  color,
  ColorProps,
  createRestyleComponent,
  createVariant,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import {Theme} from '@themes';
import React from 'react';
import {IconButton as IconButtonNative} from 'react-native-paper';

const variant = createVariant({themeKey: 'buttonVariants'});
export type IconButtonProps = ColorProps<Theme> &
  VariantProps<Theme, 'buttonVariants'> &
  React.ComponentProps<typeof IconButtonNative>;

const restyleFunctions = [variant as any, color];

export const Component = createRestyleComponent<IconButtonProps, Theme>(
  [variant],
  IconButtonNative,
);

export const IconButton = ({...rest}: IconButtonProps) => {
  const props = useRestyle(restyleFunctions, rest) as any;
  const buttonColor = props?.style?.find(() => true).color;

  return <Component color={buttonColor} {...props} />;
};
