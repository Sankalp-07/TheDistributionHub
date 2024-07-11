import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';

const PaymentDetails = () => {
  return (
    <View style={styles.pcontainer}>
      <Text style={styles.mainHeading}>Payment Details</Text>
      <View style={styles.Total}>
        <Text style={styles.heading}>Subtotal: </Text>
        <Text style={styles.heading}>₹ 89,900.00</Text>
      </View>
      <View style={styles.Total}>
        <Text style={styles.heading}>Shipping Charges: </Text>
        <Text style={styles.heading}>₹ 0</Text>
      </View>
      <View style={styles.gTotal}>
        <Text style={styles.gheading}>Grand Total:</Text>
        <Text style={styles.gvheading}>₹ 89,900.00</Text>
      </View>
      <Text style={styles.freeShipping}>Free shipping Shipping to Maharashtra.</Text>
    </View>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  pcontainer: {
    backgroundColor: 'rgba(246, 212, 199, 1)',
    marginTop: responsiveVertical(14),
    borderRadius: responsiveHorizontal(8),
    marginHorizontal: responsiveHorizontal(15),
    width: responsiveHorizontal(330),
    paddingVertical: 21,
    paddingHorizontal: 13,
    borderColor:'rgba(252, 187, 159, 0.15)'
    //height: responsiveVertical(51),

  },
  gheading: {fontSize: 12, fontWeight: '600', color: 'rgba(50, 50, 50, 1)'},
  gvheading: {fontSize: 12, fontWeight: '700', color: 'rgba(50, 50, 50, 1)'},
  gTotal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveHorizontal(304),
    height: responsiveVertical(51),
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingHorizontal: responsiveHorizontal(10),
    borderWidth: 0.5,
    marginBottom: responsiveVertical(17),
  },
  Total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveHorizontal(304),
    //height: responsiveVertical(51),
    alignSelf: 'center',
    marginBottom: responsiveVertical(10),
    paddingHorizontal: responsiveHorizontal(10),
  },
  mainHeading:{
    marginBottom: responsiveVertical(19),
    fontSize: 11,
    fontWeight: '600',
    marginLeft: responsiveHorizontal(9),
  },
  heading:{
    fontSize: 10,
    fontWeight: '400',
    color:'rgba(50, 50, 50, 1)'
  },
  freeShipping:{
    fontSize: 9,
    fontWeight: '400',
    color:"rgba(118, 118, 118, 1)",alignSelf: 'center',
  }
});
