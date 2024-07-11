import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';
import { useNavigation } from '@react-navigation/native';
const CartButtons = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bcontainer}>
      <View style={styles.total}>
        <Text
          style={{
            fontSize: 9,
            fontWeight: '400',
            color: 'rgba(50, 50, 50, 1)',
          }}>
          Grand Total
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(50, 50, 50, 1)',
          }}>
          ₹ 89,900.00
        </Text>
      </View>

      <TouchableOpacity style={styles.checkout} onPress={() => {navigation.navigate('Profile')}}>
        <Image
          source={require('../assets/icons/checkout.png')}
          style={styles.image}
        />
        <Text style={{color: 'white'}}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartButtons;

const styles = StyleSheet.create({
  bcontainer: {
    //position: 'absolute',
    //bottom: responsiveVertical(14),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHorizontal(15),
    marginTop: responsiveVertical(31),
    marginBottom: responsiveVertical(14),
  },
  image: {
    width: responsiveHorizontal(16),
    height: responsiveVertical(16),
    marginRight: responsiveHorizontal(3),
  },
  checkout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(246, 86, 18, 1)',
    borderWidth: 0.5,
    width: responsiveHorizontal(160),
    height: responsiveVertical(60),
    backgroundColor: 'rgba(246, 86, 18, 1)',
    padding: responsiveHorizontal(22),
    borderRadius: responsiveHorizontal(37),
  },
  total: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(246, 86, 18, 1)',
    borderWidth: 0.5,
    width: responsiveHorizontal(160),
    height: responsiveVertical(60),
    marginRight: responsiveHorizontal(10),
    borderRadius: responsiveHorizontal(37),
    backgroundColor: 'white',
  },
});
