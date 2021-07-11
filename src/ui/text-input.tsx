import {
  createRestyleComponent,
  createVariant,
  SpacingProps,
  typography,
  TypographyProps,
  VariantProps,
} from '@shopify/restyle';
import {Theme} from '@themes';
import React from 'react';
import {TextInput as TextInputNative} from 'react-native';

const variant = createVariant({themeKey: 'textInputVariants'});
export type TextInputProps = SpacingProps<Theme> &
  TypographyProps<Theme> &
  VariantProps<Theme, 'textInputVariants'> &
  React.ComponentProps<typeof TextInputNative>;

export const TextInput = createRestyleComponent<TextInputProps, Theme>(
  [typography, variant],
  TextInputNative,
);
