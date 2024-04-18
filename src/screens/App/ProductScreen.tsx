import { Text } from 'react-native';

import { Box } from '@/components';
import { AppScreenProps } from '@/routes';

export function ProductScreen({ route }: AppScreenProps<'ProductScreen'>) {
  const { product } = route.params;

  console.log(product);

  return (
    <Box>
      <Text>Product Screen</Text>
    </Box>
  );
}
