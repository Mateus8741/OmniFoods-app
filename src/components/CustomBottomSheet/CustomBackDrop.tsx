/* eslint-disable prettier/prettier */
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'
import { useMemo } from 'react'
import { Pressable } from 'react-native'
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle
} from 'react-native-reanimated'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

interface CustomBackDropProps extends BottomSheetBackdropProps {
  onPress?: () => void
}

export const CustomBackdrop = ({
  animatedIndex,
  style,
  onPress,
}: CustomBackDropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolation.CLAMP,
    ),

    display: animatedIndex.value > 0 ? 'flex' : 'none',
  }))

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  )

  return <AnimatedPressable onPress={onPress} style={[containerStyle]} />
}