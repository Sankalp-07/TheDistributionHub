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
import BlurWithoutTextInput from '../components/BlurWithoutTextInput';

const BillingDetails = ({navigation}) => {
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

  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [companyname, setcompanyname] = useState('');
  const [countryname, setcountryname] = useState('');
  const [houseandstreetname, sethouseandstreetname] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');

  return (
    <ScrollView style={styles.container}>
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
        source={require('../assets/images/billing.png')}
        style={styles.loginSit}
      />

      <View
        style={{
          position: 'relative',
          top: responsiveVertical(-50),
          alignSelf: 'center',
          width: responsiveHorizontal(303),
        }}>
        <BlurWithoutTextInput
          value={firstname}
          setValue={setfirstname}
          placeholder="First Name *"
          backgroundColor="rgba(239, 238, 238, 1)"
        />
        <BlurWithoutTextInput
          value={lastname}
          setValue={setlastname}
          placeholder="Last Name *"
          backgroundColor="rgba(239, 238, 238, 1)"
        />
        <BlurWithoutTextInput
          value={companyname}
          setValue={setcompanyname}
          placeholder="Company name (optional)"
          backgroundColor="rgba(239, 238, 238, 1)"
        />
        <BlurWithoutTextInput
          value={countryname}
          setValue={setcountryname}
          placeholder="Country/Region *"
          backgroundColor="rgba(239, 238, 238, 1)"
        />

        <View style={styles.heading}>
          <Text style={styles.headingText}>Street address *</Text>
        </View>

        <BlurWithoutTextInput
          value={houseandstreetname}
          setValue={sethouseandstreetname}
          placeholder="House number and street name"
          backgroundColor="rgba(239, 238, 238, 1)"
        />
        <BlurWithoutTextInput
          value={houseandstreetname}
          setValue={sethouseandstreetname}
          placeholder="Apartment, suite, unit, etc. (optional)"
          backgroundColor="rgba(239, 238, 238, 1)"
        />

        <View style={styles.heading}>
          <Text style={styles.headingText}>Town / City *</Text>
        </View>

        <BlurWithoutTextInput
          value={city}
          setValue={setcity}
          placeholder="City"
          backgroundColor="rgba(239, 238, 238, 1)"
        />
        <View style={styles.heading}>
          <Text style={styles.headingText}>State *</Text>
        </View>

        <BlurWithoutTextInput
          value={state}
          setValue={setstate}
          placeholder="State"
          backgroundColor="rgba(239, 238, 238, 1)"
        />
      </View>

      <View
        style={{
          position: 'absolute',
          top: responsiveVertical(78),
          left: responsiveHorizontal(16),
          width: responsiveHorizontal(200),
        }}>
        <Text style={{fontSize: 21, fontWeight: '700'}}>Billing details</Text>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>

      {/* {!isKeyboardVisible && (
          <TouchableOpacity
            style={styles.letsBtn}
            onPress={() => {
            //   navigation.navigate('login');
            }}>
            <Text style={styles.letsStart}>Submit</Text>
            <Image
              source={require('../assets/icons/right-arrow.png')}
              style={styles.icon24}
            />
          </TouchableOpacity>
        )} */}

      <TouchableOpacity
        style={styles.letsBtn}
        onPress={() => {
          //   navigation.navigate('login');
        }}>
        <Text style={styles.letsStart}>Submit</Text>
        <Image
          source={require('../assets/icons/right-arrow.png')}
          style={styles.icon24}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#ffffff'},
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
    width: responsiveHorizontal(178.26),
    height: responsiveVertical(138.64),
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
  heading: {
    marginBottom: responsiveVertical(11),
  },
  headingText: {fontSize: 16, fontWeight: '600'},
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
    //position: 'absolute',
    marginBottom: responsiveVertical(10),
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

export default BillingDetails;
