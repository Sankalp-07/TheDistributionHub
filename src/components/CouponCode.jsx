import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';
const CouponCode = () => {
  return (
    <View style={styles.ccontainer}>
      <TextInput
        placeholder="coupon code"
        style={{
          backgroundColor: '#ffffff',
          width: responsiveHorizontal(211),
          height: responsiveVertical(40),
          borderRadius: responsiveHorizontal(4),
        }}
      />
      <TouchableOpacity style={styles.Applycoupon}>
        <Text style={{color: 'white'}}>Apply coupon</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CouponCode;

const styles = StyleSheet.create({
  ccontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveVertical(8),
    marginHorizontal: responsiveHorizontal(15),
  },
  Applycoupon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(246, 86, 18, 1)',
    borderWidth: 0.5,
    width: responsiveHorizontal(108),
    height: responsiveVertical(32),
    backgroundColor: 'rgba(246, 86, 18, 1)',
    padding: responsiveHorizontal(6),
    borderRadius: responsiveHorizontal(37),
  },
});
