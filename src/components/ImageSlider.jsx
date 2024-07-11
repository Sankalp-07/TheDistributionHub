import {View, Text} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';

const ImageSlider = ({images, paginationBoxStyle, autoplay, circleLoop}) => {
  return (
    <SliderBox
      //   ImageComponent={FastImage}
      images={images}
      sliderBoxHeight={'100%'}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      dotColor="rgba(246, 86, 18, 1)"
      inactiveDotColor="rgba(217, 217, 217, 1)"
      paginationBoxVerticalPadding={20}
      autoplay={autoplay}
      circleLoop={circleLoop}
      resizeMethod={'resize'}
      resizeMode={'cover'}
      paginationBoxStyle={paginationBoxStyle}
      dotStyle={{
        width: responsiveHorizontal(10),
        height: responsiveVertical(10),
        borderRadius: responsiveHorizontal(5),
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: 'rgba(128, 128, 128, 0.92)',
      }}
      ImageComponentStyle={{
        borderRadius: responsiveHorizontal(15),
        width: '97%',
        marginTop: responsiveVertical(5),
      }}
      imageLoadingColor="#2196F3"
    />
  );
};

export default ImageSlider;
