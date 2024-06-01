/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { FormatCurrency } from '@/utils';

type ProductDataProps = {
  title: string;
  price: number;
  thumbnail: ImageProps;
  quantity?: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

export const CartProducts = forwardRef<TouchableOpacity, ProductProps>(({ data, ...rest }, ref) => {
  return (
    <TouchableOpacity ref={ref} className="w-full flex-row items-center pb-4" {...rest}>
      <Image
        source={{
          uri: String(data.thumbnail),
        }}
        className="h-24 w-24 rounded-md"
        alt=""
      />

      <View className="ml-3 flex-1 gap-y-2">
        <View className="flex-row items-center">
          <Text className="flex-1 font-subtitle text-base text-slate-100">{data.title}</Text>

          {data.quantity && (
            <Text className="text-md font-subtitle text-slate-400">x {data.quantity}</Text>
          )}
        </View>

        <Text className="text-md leading-5 text-slate-100">{FormatCurrency(data.price)}</Text>
      </View>
    </TouchableOpacity>
  );
});
