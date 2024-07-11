import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';

const Dropdown = ({isOpen, setIsOpen}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setIsOpen(!isOpen);
        }}>
        <Text style={styles.description}>Description</Text>
        <View>
          {isOpen && (
            <Image
              source={require('../assets/icons/bottom.png')}
              style={styles.image}
            />
          )}
        </View>
      </TouchableOpacity>
      {!isOpen && <View style={styles.dropdownArea}></View>}
    </>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveHorizontal(330),
    backgroundColor: 'rgba(252, 253, 212, 1)',
    alignSelf: 'center',
    marginTop: responsiveVertical(26),
    paddingLeft: responsiveHorizontal(20),
    paddingRight: responsiveHorizontal(20),
    paddingVertical: responsiveVertical(15),
    borderRadius: responsiveHorizontal(6),
  },

  dropdownArea: {
    width: responsiveHorizontal(330),
    height: responsiveVertical(200),
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginBottom: responsiveVertical(20),
    borderRadius: responsiveHorizontal(6),
    marginTop: responsiveVertical(4),
  },

  description: {
    color: 'rgba(50, 50, 50, 1)',
    fontSize: 14,
    fontWeight: '600',
  },
  image: {width: responsiveHorizontal(19), height: responsiveVertical(10.6)},
});
