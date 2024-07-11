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
import ProductItem from '../components/ProductItem';
import CustomHeader from '../customComponent/CustomHeader';

const ProductCategory = ({navigation}) => {
  const [items, setItems] = useState([
    {src: require('../assets/images/m1.png')},
    {src: require('../assets/images/m2.png')},
    {src: require('../assets/images/m3.png')},
  ]);
  return (
    <ScrollView>
      <CustomHeader title={'Category'} />
      <View>
        <Image
          source={require('../assets/images/Banner.png')}
          style={styles.banner}
        />
      </View>

      <View style={styles.sortContainer}>
        <Text style={styles.heading}>Brand Name Comes here</Text>
        <View style={styles.sort}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/sort.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.heading}>Sort by</Text>
            <Text style={styles.subheading}>Mobile</Text>
          </View>
        </View>
      </View>

      <ProductItem items={items} setItems={setItems} navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: responsiveHorizontal(360),
    height: responsiveVertical(234),
  },
  heading: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    fontWeight: '500',
  },

  subheading: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontWeight: '300',
  },

  image: {
    width: responsiveHorizontal(16),
    height: responsiveVertical(15),
    marginRight: responsiveHorizontal(4),
    tintColor: 'rgba(61, 61, 61, 1)',
  },

  sortContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsiveHorizontal(15),
    backgroundColor: '#FFFFFF',
    marginBottom: responsiveVertical(10),
  },

  sort: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ProductCategory;
