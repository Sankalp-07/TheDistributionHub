import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';

const StartPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: '100%'}}>
        <Image
          source={require('../assets/images/top.png')}
          style={{
            width: responsiveHorizontal(362),
            height: responsiveVertical(248),
          }}
        />

        <View style={{position: 'relative'}}>
          <Image
            source={require('../assets/images/start.png')}
            style={styles.start}
          />
          <Image
            source={require('../assets/images/plant.png')}
            style={styles.plant}
          />
          <Image
            source={require('../assets/images/Floor.png')}
            style={[
              styles.plant,
              {
                left: responsiveHorizontal(32),
                top: responsiveVertical(180),
                width: responsiveHorizontal(106),
                height: responsiveVertical(24.48),
              },
            ]}
          />
        </View>

        <ImageBackground
          source={require('../assets/images/bottom.png')}
          style={styles.bottom}>
          <View style={{position: 'relative', width: '100%', height: '100%'}}>
            <View
              style={{
                position: 'absolute',
                bottom: responsiveVertical(124),
                alignSelf: 'center',
                width: '70%',
                // borderWidth: 1
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: 'white',
                  marginTop: 4,
                  marginBottom:15
                }}>
                The Home Distribution Hub
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#000000', lineHeight: 20}}>
              Unlock full potential of your electronics business, 
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', marginTop: 4, color:'#000000'}}>
              Sign in today!
              </Text>
            </View>
            <TouchableOpacity
              style={styles.letsBtn}
              onPress={() => {
                navigation.navigate('login');
              }}>
              <Text style={styles.letsStart}>Lets Start</Text>
              <Image
                source={require('../assets/icons/right-arrow.png')}
                style={styles.icon24}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    // position: 'relative',
  },
  letsBtn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F65612',
    width: responsiveHorizontal(156),
    height: responsiveVertical(54),
    borderRadius: responsiveHorizontal(43),
    marginTop: responsiveVertical(34),
    position: 'absolute',
    bottom: responsiveVertical(36),
    alignSelf: 'center',
  },
  letsStart: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  top: {
    backgroundColor: 'rgba(242, 248, 251, 1)',
    width: responsiveVertical(360),
    height: responsiveHorizontal(248),
  },
  start: {
    width: responsiveHorizontal(247),
    height: responsiveVertical(371),
    position: 'absolute',
    zIndex: 99,
    top: responsiveVertical(-197),
    left: responsiveHorizontal(29),
  },
  plant: {
    width: responsiveHorizontal(130.26),
    height: responsiveVertical(186.65),
    position: 'absolute',
    top: responsiveVertical(-15),
    zIndex: 99,
    right: responsiveHorizontal(12.74),
  },
  icon24: {width: responsiveHorizontal(24), height: responsiveVertical(24)},
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottom: {
    width: responsiveHorizontal(360),
    height: responsiveVertical(447),
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default StartPage;
