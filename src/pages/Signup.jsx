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
const Signup = ({navigation}) => {
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
  const [password, setpassword] = useState('');
  const [dob, setdob] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [email, setemail] = useState('');
  const [companyname, setcompanyname] = useState('');

  return (
    <>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <Image
          source={require('../assets/images/loginTop.png')}
          style={styles.loginTop}
        />
        <Image
          source={require('../assets/images/Device.png')}
          style={{
            width: responsiveHorizontal(70.54),
            height: responsiveVertical(121.7),
            position: 'absolute',
            top: responsiveVertical(18),
            right: responsiveHorizontal(91.96),
          }}
        />

        <Image
          source={require('../assets/images/signupStand.png')}
          style={styles.loginSit}
        />

        <View
          style={{
            position: 'relative',
            top: responsiveVertical(-95),
            alignSelf: 'center',
            // left: responsiveHorizontal(16),
            width: responsiveHorizontal(303),
          }}>
          <MyTextInput
            value={username}
            setValue={setusername}
            placeholder="Username"
          />
          <MyTextInput
            value={password}
            setValue={setpassword}
            placeholder="Password"
          />
          <MyTextInput value={dob} setValue={setdob} placeholder="DOB" />
          <MyTextInput
            value={phonenumber}
            setValue={setphonenumber}
            placeholder="Phone Number"
          />
          <MyTextInput value={email} setValue={setemail} placeholder="Email" />
          <MyTextInput
            value={companyname}
            setValue={setcompanyname}
            placeholder="Company Name"
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: responsiveVertical(78),
            left: responsiveHorizontal(16),
            width: responsiveHorizontal(200),
          }}>
          <Text style={{fontSize: 21, fontWeight: '700'}}>Signup</Text>
          <Text style={{fontSize: 14, fontWeight: '400'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </ScrollView>
      {!isKeyboardVisible && (
        <TouchableOpacity
          style={styles.letsBtn}
          onPress={() => {
            navigation.navigate('login');
          }}>
          <Text style={styles.letsStart}>Sign in</Text>
          <Image
            source={require('../assets/icons/right-arrow.png')}
            style={styles.icon24}
          />
        </TouchableOpacity>
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
    width: responsiveHorizontal(144.13),
    height: responsiveVertical(353.17),
    position: 'absolute',
    top: responsiveVertical(94),
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
export default Signup;
