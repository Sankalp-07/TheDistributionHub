import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';

const MyButton = ({
  borderColor,
  backgroundColor,
  icon,
  title,
  onClick,
  tintColor,
  color,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={[
        styles.buttonStyle,
        {backgroundColor: backgroundColor, borderColor: borderColor},
      ]}>
      <Image style={[styles.image, {tintColor: tintColor}]} source={icon} />
      <Text style={{color: color}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  image: {
    width: responsiveHorizontal(16),
    height: responsiveVertical(14),
    marginRight: responsiveHorizontal(3),
  },
  buttonStyle: {
    width: responsiveHorizontal(157),
    height: responsiveVertical(35),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 29,
    borderWidth: 1,
  },
});
