import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CustomHeader = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image style={styles.logoIcon} source={require('../assets/icons/logo.png')} />
      </TouchableOpacity>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.iconRightContainer}>
        <TouchableOpacity style={styles.iconContainer}>
        <Image style={styles.icon} source={require('../assets/icons/heart.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
        <Image style={styles.icon} source={require('../assets/icons/shopping-cart.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  iconContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: -15,
    color: '#000',
  },
  iconRightContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 15,
    height: 15,
  },
  logoIcon: {
    width: 35,
    height: 35,
  }
});

export default CustomHeader;
