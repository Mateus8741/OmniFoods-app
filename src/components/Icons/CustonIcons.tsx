import { MaterialIcons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

type IconProps = {
  icon: string;
  size?: number;
  color?: string;
  entering?: any;
};

export function CustonIcons({ icon, color, size, entering }: IconProps) {
  const AnimatedIcon = Animated.createAnimatedComponent(MaterialIcons);

  return <AnimatedIcon name={icon} size={size} color={color} entering={entering} />;
}
