import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import HomeTopList from '../components/HomeTopList';
import NewArrivals from '../components/NewArrivals';
import SearchBar from '../components/SearchBar';
import ImageSlider from '../components/ImageSlider';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';
import CustomHeader from '../customComponent/CustomHeader';

const Home = () => {
  const [items, setItems] = useState([{}, {}, {}, {}, {}, {}, {}]);
  const [offers, setOffers] = useState([
    require('../assets/images/sliderImage1.png'),
    require('../assets/images/sliderImage2.png'),
  ]);

  const paginationBoxStyle = {
    position: 'absolute',
    bottom: 11,
    right: 0,
    padding: 0,
    zIndex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  };

  return (
    <ScrollView style={styles.container}>
      <CustomHeader title={'Tele Home Distribution Hub'} />
      <SearchBar />

      <HomeTopList>
        {items.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                marginRight: 26,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(253, 209, 0, 1)',
                  padding: 10,
                }}>
                <Image
                  source={require('../assets/images/box.png')}
                  style={{width: 33, height: 36}}
                />
              </View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '300',
                  color: 'rgba(0, 0, 0, 1)',
                  marginTop: responsiveVertical(7),
                }}>
                Speakers
              </Text>
            </TouchableOpacity>
          );
        })}
      </HomeTopList>

      <View style={styles.imageSlideContainer}>
        <ImageSlider
          images={offers}
          autoplay={true}
          circleLoop={true}
          paginationBoxStyle={paginationBoxStyle}
        />
      </View>

      <NewArrivals>
        <HomeTopList>
          {items.map((item, index) => {
            return (
              <TouchableOpacity style={styles.arrivalContainer}>
                <TouchableOpacity style={styles.heartSection}>
                  <Image
                    style={styles.heart}
                    source={require('../assets/icons/addlike.png')}
                  />
                </TouchableOpacity>
                <View style={styles.arrivalImageContainer}>
                  <Image
                    source={require('../assets/images/box.png')}
                    style={styles.arrivalImage}
                  />
                </View>
                <Text style={styles.heading}>JOLT 20K/A (Swiss Military)</Text>
              </TouchableOpacity>
            );
          })}
        </HomeTopList>
      </NewArrivals>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  heartSection: {
    width: responsiveHorizontal(15),
    height: responsiveVertical(15),
    position: 'absolute',
    top: responsiveVertical(6),
    right: responsiveHorizontal(8),
    backgroundColor: 'rgba(249, 246, 246, 1)',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heart: {
    width: responsiveHorizontal(7),
    height: responsiveVertical(5.83),
    alignSelf: 'center',
  },

  heading: {
    fontSize: 7,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },

  arrivalContainer: {
    marginRight: responsiveHorizontal(26),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: responsiveHorizontal(108),
    height: responsiveVertical(132),
    borderRadius: responsiveHorizontal(6),
  },

  arrivalImage: {
    width: responsiveHorizontal(59),
    height: responsiveVertical(66),
  },

  arrivalImageContainer: {
    padding: responsiveHorizontal(10),
    marginTop: responsiveVertical(20),
  },

  imageSlideContainer: {
    width: responsiveHorizontal(360),
    height: responsiveVertical(262),
    marginTop: responsiveVertical(3),
  },
});
export default Home;
