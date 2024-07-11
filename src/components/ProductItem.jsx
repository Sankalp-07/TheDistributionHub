import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';
import MyButton from '../components/MyButton';
const ProductItem = ({items, setItems, navigation}) => {
  const pressedAddToCartBtn = () => {};
  const pressedProductItem = () => {
    if (navigation !== undefined) {
      navigation.navigate('Product details');
    }
  };
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.product}
            onPress={() => pressedProductItem()}>
            <Image source={item.src} style={styles.imageContainer} />
            <Text style={styles.heading}>APPLE iphone 15</Text>
            <Text style={styles.subheading}>Log In to view price</Text>
            <TouchableOpacity style={styles.addLikeContainer}>
              <Image
                source={require('../assets/icons/addlike.png')}
                style={styles.addlike}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //onClick();
              }}
              style={[
                styles.buttonStyle,
                {
                  backgroundColor: 'rgba(246, 86, 18, 1)',
                  borderColor: 'rgba(246, 86, 18, 1)',
                },
              ]}>
              <Image
                style={[styles.image, {tintColor: 'rgba(255, 255, 255, 1)'}]}
                source={require('../assets/icons/addToCart.png')}
              />
              <Text style={{color: '#FFFFFF', fontSize: 9, fontWeight: '400'}}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'rgba(243, 243, 243, 1)',
  },
  product: {
    width: responsiveHorizontal(160),
    height: responsiveVertical(180),
    borderWidth: 0.5,
    borderColor: 'rgba(237, 237, 237, 1)',
    marginBottom: responsiveVertical(15),
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: responsiveHorizontal(6),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: responsiveHorizontal(66),
    height: responsiveVertical(90),
    marginBottom: responsiveVertical(11),
    //marginTop: responsiveVertical(3),
  },

  addlike: {
    width: responsiveHorizontal(16),
    height: responsiveVertical(14),
  },

  addLikeContainer: {
    position: 'absolute',
    width: responsiveHorizontal(32),
    height: responsiveVertical(26),
    left: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 245, 232, 1)',
    borderTopRightRadius: responsiveHorizontal(9),
  },

  details: {
    marginTop: responsiveVertical(54),
    marginLeft: responsiveHorizontal(14),
  },

  heading: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '500',
  },

  subheading: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 9,
    fontWeight: '400',
    marginBottom: responsiveVertical(10),
  },

  discount: {
    backgroundColor: 'rgba(221, 255, 243, 1)',
    height: responsiveVertical(40),
    marginTop: responsiveVertical(13),
    paddingVertical: responsiveVertical(8),
    paddingHorizontal: responsiveHorizontal(12),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  discountStyle: {
    width: responsiveHorizontal(17),
    height: responsiveVertical(17),
    marginRight: responsiveHorizontal(3),
  },

  discountDetail: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '400',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: responsiveHorizontal(13),
    paddingRight: responsiveHorizontal(13),
    marginTop: responsiveVertical(18),
  },
  image: {
    width: responsiveHorizontal(12),
    height: responsiveVertical(12),
    marginRight: responsiveHorizontal(3),
  },
  buttonStyle: {
    position: 'absolute',
    width: responsiveHorizontal(95),
    height: responsiveVertical(26),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    right: 0,
    bottom: 0,
    borderTopRightRadius: 0,
  },
});
export default ProductItem;
