import BottomSheet, { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import React, { ReactNode, createRef, useImperativeHandle, useMemo } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import { CustomBackdrop } from './CustomBackDrop';

import { colors } from '@/theme/colors';

export type MyBottonShetHandle = {
  handleParentCloseBottonShet: () => void;
  handleParentOpenBottonShet: () => void;
};

interface MyBottonShetProps {
  children: ReactNode;
  height: number;
  hasImageOnTop?: boolean;
  scrollable?: boolean;
}

export const CustomBottomSheet = React.forwardRef<MyBottonShetHandle, MyBottonShetProps>(
  ({ children, height, hasImageOnTop = false, scrollable }, ref) => {
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

    const Container = scrollable ? ScrollView : View;

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
          backgroundColor: 'white',
          width: 81,
          height: 9,
        }}
        backgroundStyle={{
          backgroundColor: colors.gray[1000],
        }}
        handleStyle={hasImageOnTop ? { position: 'absolute', right: 0, left: 0 } : null}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="h-full w-full p-5">
          <Container bounces={false}>{children}</Container>
        </KeyboardAvoidingView>
      </BottomSheet>
    );
  }
);
