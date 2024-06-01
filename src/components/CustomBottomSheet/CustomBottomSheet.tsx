import BottomSheet, { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import React, { ReactNode, createRef, useImperativeHandle, useMemo } from 'react';
import { View } from 'react-native';

import { CustomBackdrop } from './CustomBackDrop';

export type MyBottonShetHandle = {
  handleParentCloseBottonShet: () => void;
  handleParentOpenBottonShet: () => void;
};

interface MyBottonShetProps {
  children: ReactNode;
  height: number;
  hasImageOnTop?: boolean;
}

export const CustomBottomSheet = React.forwardRef<MyBottonShetHandle, MyBottonShetProps>(
  ({ children, height, hasImageOnTop = false }, ref) => {
    const snapPoints = useMemo(() => [0.01, height], [height]);

    const bottomSheetRef = createRef<BottomSheet>();
    const handleCloseBottonShet = () => {
      bottomSheetRef?.current?.close();
    };

    const handleOpenBottonShet = () => {
      bottomSheetRef?.current?.expand();
    };

    useImperativeHandle(ref, () => ({
      handleParentCloseBottonShet() {
        handleCloseBottonShet();
      },
      handleParentOpenBottonShet() {
        handleOpenBottonShet();
      },
    }));
    const renderBackdrop = (props: BottomSheetBackdropProps) => (
      <CustomBackdrop onPress={() => handleCloseBottonShet()} {...props} />
    );

    return (
      <BottomSheet
        index={0}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        detached
        ref={bottomSheetRef}
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          overflow: 'hidden',
        }}
        handleIndicatorStyle={{
          backgroundColor: 'gray',
          width: 81,
          height: 9,
        }}
        handleStyle={hasImageOnTop ? { position: 'absolute', right: 0, left: 0 } : null}>
        <View
        // showsVerticalScrollIndicator={false}
        // bounces={false}
        >
          {children}
        </View>
      </BottomSheet>
    );
  }
);
