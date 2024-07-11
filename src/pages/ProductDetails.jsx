import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';
import ImageSlider from '../components/ImageSlider';
import MyButton from '../components/MyButton';
import Dropdown from '../components/Dropdown';
import CustomHeader from '../customComponent/CustomHeader';

const ProductDetails = () => {
  const [offers, setOffers] = useState([
    require('../assets/images/sliderImage1.png'),
    require('../assets/images/sliderImage2.png'),
  ]);
  const [isOpen, setIsOpen] = useState(true);

  const paginationBoxStyle = {
    position: 'absolute',
    bottom: -35,
    padding: 0,
    zIndex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  };

  const pressedWishListBtn = () => {
    console.log('pressed wishlist button');
  };
  const pressedAddToCartBtn = () => {
    console.log('pressed wishlist button');
  };

  return (
    <ScrollView>
      <CustomHeader title={'Tele Home Distribution Hub'} />
      <View style={styles.imageSlideContainer}>
        <ImageSlider
          images={offers}
          autoplay={false}
          circleLoop={false}
          paginationBoxStyle={paginationBoxStyle}
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.heading}>SKU: VIVO V29 5G 8GB 128GB Red</Text>
        <Text style={styles.subheading}>{`
Snapdragon 695 Processor 
17.22 cm (6.78 inch) Full HD+ Display 
64MP + 8MP | 50MP Front Camera
5000 mAh Battery
120 Hz 3D Curved Screen 
Light, Sleek and Slim`}</Text>
      </View>

      <View style={styles.discount}>
        <Image
          source={require('../assets/images/discount.png')}
          style={styles.discountStyle}
        />
        <Text>
          Best Buy Price, with Online Shopping Add to bag and Save 20%
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <MyButton
          icon={require('../assets/icons/addlike.png')}
          title="Wishlist"
          backgroundColor="#ffffff"
          tintColor="rgba(246, 86, 18, 1)"
          borderColor="rgba(246, 86, 18, 1)"
          color="rgba(246, 86, 18, 1)"
          onClick={pressedWishListBtn}
        />
        <MyButton
          icon={require('../assets/icons/addToCart.png')}
          title="Add to Cart"
          backgroundColor="rgba(246, 86, 18, 1)"
          tintColor="rgba(255, 255, 255, 1)"
          onClick={pressedAddToCartBtn}
          borderColor="rgba(246, 86, 18, 1)"
          color="#ffffff"
          // onPress={() => {
          //   console.log('hello');
          // }}
        />
      </View>

      <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageSlideContainer: {
    width: responsiveHorizontal(360),
    height: responsiveVertical(262),
    marginTop: responsiveVertical(3),
  },

  details: {
    marginTop: responsiveVertical(54),
    marginLeft: responsiveHorizontal(14),
  },

  heading: {
    color: 'rgba(50, 50, 50, 1)',
    fontSize: 15,
    fontWeight: '600',
  },

  subheading: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 13,
    fontWeight: '400',
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
});
export default ProductDetails;
