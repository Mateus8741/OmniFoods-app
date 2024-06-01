import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function CustomButton({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity className="items-center rounded-2xl bg-gray-1000 p-4" {...rest}>
      <Text className="text-center text-lg font-semibold text-white">{title}</Text>
    </TouchableOpacity>
  );
}
