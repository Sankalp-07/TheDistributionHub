import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';

const ItemsAtCart = () => {
  const [items, setItems] = useState([{}, {}]);
  return (
    <View style={styles.cartContainer}>
      {items.map((item, index) => {
        return (
          <View style={styles.addedCartItems} key={index}>
            <View style={styles.addedCartDetails}>
              <Image
                source={require('../assets/images/mcart.png')}
                style={styles.image}
              />
              <View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '600',
                    color: 'rgba(50, 50, 50, 1)',
                  }}>
                  SKU: VIVO V29 5G 8GB 128GB Red
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 1)',
                  }}>{`Snapdragon 695 Processor
17.22 cm (6.78 inch) Full HD+ Display
64MP + 8MP | 50MP Front Camera
5000 mAh Battery
120 Hz 3D Curved Screen
Light, Sleek and Slim`}</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'rgba(227, 227, 227, 1)',
                marginTop: responsiveVertical(17.75),
                marginBottom: responsiveVertical(16.75),
              }}></View>
            <View style={styles.total}>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 1)',
                  }}>
                  Quantity: 1
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'rgba(0, 0, 0, 1)',
                }}>
                ₹ 89,900.00
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ItemsAtCart;

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: 'rgba(247, 247, 247, 1)',
    padding: responsiveHorizontal(10),
  },
  total: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addedCartItems: {
    marginBottom: responsiveVertical(10),
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: responsiveHorizontal(17),
    width: responsiveHorizontal(330),
    alignSelf: 'center',
    borderRadius: responsiveVertical(4),
    elevation: 5,
  },
  addedCartDetails: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: responsiveHorizontal(88),
    height: responsiveVertical(110),
    marginRight: responsiveHorizontal(10),
  },
});
