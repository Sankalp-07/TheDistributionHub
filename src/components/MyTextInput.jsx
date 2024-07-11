import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';

const MyTextInput = ({placeholder, value, setValue}) => {
  const [onLoadBlurView, setOnLoadBlurView] = useState(false);
  const blurViewRef = useRef(null);

  return (
    <View style={styles.container}>
      <BlurView
        ref={blurViewRef}
        style={styles.blurView}
        blurType="light"
        blurAmount={2}
        reducedTransparencyFallbackColor="white"
        onLayout={() => {
          setOnLoadBlurView(true);
        }}>
        {onLoadBlurView && (
          <View style={styles.innerContainer}>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              onChangeText={setValue}
              value={value}
            />
          </View>
        )}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    marginBottom: responsiveVertical(20),
    alignSelf: 'center',
    width: responsiveHorizontal(303),
    height: responsiveVertical(40),
  },
  blurView: {
    height: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 46,
  },
});

export default MyTextInput;
