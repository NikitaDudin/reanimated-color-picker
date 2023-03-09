import React, { useContext } from 'react';
import { I18nManager } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { clamp, CTX, getStyle } from '../GlobalStyles';
import Thumb from './Thumbs';

import type { LayoutChangeEvent } from 'react-native';
import type { SliderProps } from '../types';
import type { PanGestureHandlerEventPayload } from 'react-native-gesture-handler';

const isRtl = I18nManager.isRTL;

export function HueSlider({
  thumbShape,
  thumbSize,
  thumbColor,
  thumbInnerStyle,
  thumbStyle,
  style = {},
  vertical = false,
  reverse = false,
}: SliderProps) {
  const {
    onGestureChange,
    onGestureEnd,
    hueValue,
    sliderThickness,
    thumbSize: thumbsSize,
    thumbShape: thumbsShape,
    thumbColor: thumbsColor,
    thumbStyle: thumbsStyle,
    thumbInnerStyle: thumbsInnerStyle,
  } = useContext(CTX);

  thumbShape = thumbShape ?? thumbsShape;
  const thumb_size = thumbSize ?? thumbsSize;
  const thumb_color = thumbColor ?? thumbsColor;
  const thumb_style = thumbStyle ?? thumbsStyle ?? {};
  const thumb_inner_style = thumbInnerStyle ?? thumbsInnerStyle ?? {};

  const borderRadius = getStyle(style, 'borderRadius') ?? 5;
  const getWidth = getStyle(style, 'width');
  const getHeight = getStyle(style, 'height');

  const width = useSharedValue(vertical ? sliderThickness : typeof getWidth === 'number' ? getWidth : 0);
  const height = useSharedValue(!vertical ? sliderThickness : typeof getHeight === 'number' ? getHeight : 0);

  const handleScale = useSharedValue(1);

  const handleStyle = useAnimatedStyle(() => {
    const length = vertical ? height.value : width.value,
      percent = (hueValue.value / 360) * length,
      pos = (reverse ? length - percent : percent) - thumb_size / 2,
      posY = vertical ? pos : height.value / 2 - thumb_size / 2,
      posX = vertical ? width.value / 2 - thumb_size / 2 : pos;
    return {
      transform: [{ translateY: posY }, { translateX: posX }, { scale: handleScale.value }],
    };
  }, [thumbSize, vertical, reverse]);

  const setValueFromGestureEvent = (event: PanGestureHandlerEventPayload) => {
    'worklet';
    const posX = clamp(event.x, width.value),
      posY = clamp(event.y, height.value),
      percentX = posX / width.value,
      percentY = posY / height.value,
      valX = reverse ? 360 - Math.round(percentX * 360) : Math.round(percentX * 360),
      valY = reverse ? 360 - Math.round(percentY * 360) : Math.round(percentY * 360);

    hueValue.value = vertical ? valY : valX;

    runOnJS(onGestureChange)();
  };

  const gestureEvent = useAnimatedGestureHandler(
    {
      onStart: event => {
        handleScale.value = withTiming(1.2, { duration: 100 });
        setValueFromGestureEvent(event);
      },
      onActive: event => {
        setValueFromGestureEvent(event);
      },
      onFinish: () => {
        handleScale.value = withTiming(1, { duration: 100 });
        runOnJS(onGestureEnd)();
      },
    },
    [width.value, height.value, vertical, reverse]
  );

  const onLayout = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
    if (!vertical) width.value = withTiming(Math.round(layout.width), { duration: 5 });
    if (vertical) height.value = withTiming(Math.round(layout.height), { duration: 5 });
  };

  const imageStyle = useAnimatedStyle(() => {
    const imageRotate = vertical ? (reverse ? '270deg' : '90deg') : reverse ? '180deg' : '0deg';
    const imageTranslateY =
      (reverse && isRtl) || (!reverse && !isRtl) ? height.value / 2 - width.value / 2 : -height.value / 2 + width.value / 2;
    return {
      width: vertical ? height.value : width.value,
      height: vertical ? width.value : height.value,
      borderRadius,
      transform: [
        { rotate: imageRotate },
        { translateX: vertical ? (reverse ? -height.value / 2 + width.value / 2 : height.value / 2 - width.value / 2) : 0 },
        { translateY: vertical ? imageTranslateY : 0 },
      ],
    };
  }, [vertical, reverse, sliderThickness]);

  const thicknessStyle = vertical ? { width: sliderThickness } : { height: sliderThickness };

  return (
    <PanGestureHandler onGestureEvent={gestureEvent} minDist={0}>
      <Animated.View
        onLayout={onLayout}
        style={[{ borderRadius }, style, thicknessStyle, { position: 'relative', borderWidth: 0, padding: 0 }]}
      >
        <Animated.Image source={require('../assets/Hue.png')} style={imageStyle} />
        <Thumb
          {...{
            channel: 'h',
            thumbShape,
            thumbSize: thumb_size,
            thumbColor: thumb_color,
            handleStyle,
            innerStyle: thumb_inner_style,
            style: thumb_style,
            vertical,
          }}
        />
      </Animated.View>
    </PanGestureHandler>
  );
}
