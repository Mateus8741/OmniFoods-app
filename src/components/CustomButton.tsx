import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isDisabled?: boolean;
}

export function CustomButton({ title, isDisabled, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-16 items-center justify-center rounded-2xl bg-gray-1000"
      disabled={isDisabled}
      {...rest}>
      {isDisabled ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text className="text-center text-lg font-semibold text-white">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
