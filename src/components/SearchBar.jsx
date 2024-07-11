import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search for product, category, brand..." />
      <Image
        source={require('../assets/icons/search.png')}
        style={styles.search}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 330,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(242, 242, 242, 1)',
    borderRadius: 51,
    // borderWidth: 1,
    paddingLeft: 23,
    paddingRight: 23,
    marginTop: 15,
    marginBottom: 14,
  },
  search: {width: 14.92, height: 14.93},
});
export default SearchBar;
