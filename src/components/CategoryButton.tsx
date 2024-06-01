import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

type CatergoryButtonProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CatergoryButton({ title, isSelected = false, ...rest }: CatergoryButtonProps) {
  return (
    <Pressable className="h-10 justify-center rounded-md px-4" {...rest}>
      <Text className="font-bold text-sm text-slate-100">{title}</Text>

      {isSelected && <View className="mt-1 h-[3px] w-12 self-center bg-red-line pt-1" />}
    </Pressable>
  );
}
