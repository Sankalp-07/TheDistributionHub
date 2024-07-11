import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';

import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';
import MyTextInput from '../components/MyTextInput';
const ForgotPassword = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const checkkeyboard = setKeyboardVisible => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        return setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        return setKeyboardVisible(false);
      },
    );

    // return () => {
    //   keyboardDidHideListener.remove();
    //   keyboardDidShowListener.remove();
    // };
  };
  useEffect(() => {
    checkkeyboard(setKeyboardVisible);
  }, [isKeyboardVisible]);

  const [username, setusername] = useState('');

  const [emailorphone, setEmailOrPhone] = useState('');

  return (
    <>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <Image
          source={require('../assets/images/loginTop.png')}
          style={styles.loginTop}
        />

        <Image
          source={require('../assets/images/forgotSelfi.png')}
          style={styles.loginSit}
        />

        <Image
          source={require('../assets/images/forgotFloor.png')}
          style={{
            width: responsiveHorizontal(260),
            height: responsiveVertical(16),
            alignSelf: 'center',
            position: 'absolute',
            top: responsiveVertical(348),
          }}
        />

        <View
          style={{
            position: 'absolute',
            top: responsiveVertical(240.38),
            right: responsiveHorizontal(124.92),
            display: 'flex',
            flexDirection: 'row',
            borderWidth: 1,
            paddingHorizontal: responsiveHorizontal(5.26),
            paddingVertical: responsiveVertical(2.2),
            borderRadius: responsiveHorizontal(6),
          }}>
          {[{}, {}, {}, {}, {}].map(() => {
            return (
              <Image
                source={require('../assets/images/fstar.png')}
                style={{
                  width: responsiveHorizontal(10.36),
                  height: responsiveVertical(9.86),
                  marginRight: responsiveHorizontal(6.75),
                }}
              />
            );
          })}
        </View>

        <Image
          source={require('../assets/images/forgotLock.png')}
          style={{
            width: responsiveHorizontal(29.27),
            height: responsiveVertical(48.91),
            position: 'absolute',
            top: responsiveVertical(135),
            right: responsiveHorizontal(169.57),
          }}
        />

        <View
          style={{
            position: 'relative',
            top: responsiveVertical(20),
            alignSelf: 'center',
            width: responsiveHorizontal(303),
          }}>
          <MyTextInput
            value={username}
            setValue={setusername}
            placeholder="User Name"
          />
          <MyTextInput
            value={emailorphone}
            setValue={setEmailOrPhone}
            placeholder="Email/Phone Number"
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: responsiveVertical(78),
            left: responsiveHorizontal(16),
            width: responsiveHorizontal(200),
          }}>
          <Text
            style={{
              fontSize: 21,
              fontWeight: '700',
              width: responsiveHorizontal(149),
            }}>
            Forgot/ Reset Password
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              width: responsiveHorizontal(170),
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </ScrollView>

      {!isKeyboardVisible && (
        <View style={{position:'relative'}}>
          <View
            style={{
              alignSelf: 'center',
              width: responsiveHorizontal(220),
              height: responsiveVertical(32),
              position: 'absolute',
              top: responsiveVertical(-140),
            }}>
            <Text
              style={{
                color: 'rgba(54, 54, 54, 1)',
                fontSize: 14,
                fontWeight: '400',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
          <TouchableOpacity style={styles.letsBtn} onPress={() => {}}>
            <Text style={styles.letsStart}>Reset your password</Text>
            <Image
              source={require('../assets/icons/right-arrow.png')}
              style={styles.icon24}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loginTop: {
    width: responsiveHorizontal(360),
    height: responsiveVertical(370),
  },
  loginPlants: {
    width: responsiveHorizontal(86.18),
    height: responsiveVertical(135.99),
    position: 'absolute',
    right: responsiveHorizontal(15.36 + 153.64),
    top: responsiveVertical(210),
  },
  loginSit: {
    width: responsiveHorizontal(132.53),
    height: responsiveVertical(328.47),
    position: 'absolute',
    // zIndex: 1,
    top: responsiveVertical(20),
    right: responsiveHorizontal(15.36),
  },
  input: {
    height: 40,
    borderColor: 'gray',
    // backgroundColor: 'rgba(239, 238, 238, 1)',
    borderWidth: 1,
    paddingHorizontal: 10,
    // marginBottom: 20,
    // width: responsiveHorizontal(303),
    width: '100%',
    alignSelf: 'center',
    borderRadius: 46,
  },
  blurView: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    // width: '100%',
    // paddingHorizontal: 10,
    marginBottom: 20,
    width: responsiveHorizontal(303),
    alignSelf: 'center',
    borderRadius: 46,
  },
  letsBtn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: responsiveHorizontal(303),
    height: responsiveVertical(54),
    borderRadius: responsiveHorizontal(43),
    //marginTop: responsiveVertical(34),
    position: 'absolute',
    bottom: responsiveVertical(36),
    alignSelf: 'center',
  },
  letsStart: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  absolute: {position: 'absolute', top: 0, bottom: 0, left: 0, right: 0},
  sitFloor: {
    width: responsiveHorizontal(269),
    height: responsiveVertical(1),
    alignSelf: 'center',
    position: 'absolute',
    top: responsiveVertical(345),
    //right: responsiveHorizontal(15.36),
  },
  icon24: {width: responsiveHorizontal(24), height: responsiveVertical(24)},
});
export default ForgotPassword;
