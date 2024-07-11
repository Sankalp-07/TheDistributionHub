import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
const NewArrivals = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.newArrivals}>NewArrivals</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  newArrivals: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(50, 50, 50, 1)',
    alignSelf: 'center',
    marginTop: 18,
    marginBottom: 21,
  },
  container:{
    backgroundColor: 'rgba(247, 247, 247, 1)',
    paddingBottom: 12,
  }
});

export default NewArrivals;
