import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';
import MyTextInput from '../components/MyTextInput';
const Login = ({navigation}) => {
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

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  useEffect(() => {
    checkkeyboard(setKeyboardVisible);
  }, [isKeyboardVisible]);

  return (
    <>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <Image
          source={require('../assets/images/loginTop.png')}
          style={styles.loginTop}
        />
        <Image
          source={require('../assets/images/loginPlants.png')}
          style={styles.loginPlants}
        />
        <Image
          source={require('../assets/images/sitFloor.png')}
          style={styles.sitFloor}
        />
        <Image
          source={require('../assets/images/loginSit.png')}
          style={styles.loginSit}
        />

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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('forgotpassword');
          }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            alignSelf: 'center',
            width: responsiveHorizontal(303),
          }}>
          <Text
            style={{
              color: 'rgba(88, 88, 88, 1)',
              fontSize: 10,
              fontWeight: '400',
            }}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: responsiveVertical(78),
            left: responsiveHorizontal(16),
            width: responsiveHorizontal(200),
          }}>
          <Text style={{fontSize: 21, fontWeight: '700'}}>Sign in</Text>
          <Text style={{fontSize: 14, fontWeight: '400'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </ScrollView>
      {!isKeyboardVisible && (
        <TouchableOpacity
          style={styles.letsBtn}
          onPress={() => {
            navigation.navigate("MyDrawer");
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
    width: responsiveHorizontal(153.64),
    height: responsiveVertical(332.78),
    position: 'absolute',
    top: responsiveVertical(24),
    right: responsiveHorizontal(15.36),
  },
  letsBtn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F65612',
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
  sitFloor: {
    width: responsiveHorizontal(269),
    height: responsiveVertical(1),
    alignSelf: 'center',
    position: 'absolute',
    top: responsiveVertical(345),
    //right: responsiveHorizontal(15.36),
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'rgba(239, 238, 238, 1)',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: responsiveHorizontal(303),
    alignSelf: 'center',
    borderRadius: 46,
  },
  icon24: {width: responsiveHorizontal(24), height: responsiveVertical(24)},
});
export default Login;
