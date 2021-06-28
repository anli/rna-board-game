import {createBox} from '@shopify/restyle';
import {Theme} from '@themes';
import {SafeAreaView} from 'react-native';

type Props = React.ComponentProps<typeof SafeAreaView> & {
  children: React.ReactNode;
};

export const Screen = createBox<Theme, Props>(SafeAreaView);
