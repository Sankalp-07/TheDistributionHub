import React, {useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';

const HomeTopList = ({children}) => {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: responsiveHorizontal(14),
  },
});

export default HomeTopList;
