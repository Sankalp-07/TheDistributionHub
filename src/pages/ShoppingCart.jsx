import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';
import PaymentDetails from '../components/PaymentDetails';
import CartButtons from '../components/CartButtons';
import CouponCode from '../components/CouponCode';
import DeliveryStatus from '../components/DeliveryStatus';
import ItemsAtCart from '../components/ItemsAtCart';

const ShoppingCart = () => {
  return (
    <ScrollView>
      <View style={styles.discount}>
        <Text>Congrats! You unlocked extra 10% off on your 1st order!</Text>
      </View>
      <DeliveryStatus />
      <ItemsAtCart />
      <CouponCode />
      <PaymentDetails />
      <CartButtons />
    </ScrollView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  discount: {
    backgroundColor: 'rgba(221, 255, 243, 1)',
    height: responsiveVertical(40),
    paddingVertical: responsiveVertical(8),
    paddingHorizontal: responsiveHorizontal(12),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveVertical(5),
  },

  discountStyle: {
    width: responsiveHorizontal(17),
    height: responsiveVertical(17),
    marginRight: responsiveHorizontal(3),
  },
});
