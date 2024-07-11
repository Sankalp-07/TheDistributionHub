import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {responsiveVertical, responsiveHorizontal} from '../styles/Responsive';

const DeliveryStatus = () => {
  return (
    <View style={styles.maindelcontainer}>
      <View style={styles.delcontainer}>
        <Image
          source={require('../assets/icons/delivery.png')}
          style={{
            width: responsiveHorizontal(32),
            height: responsiveVertical(32),
            marginRight: responsiveHorizontal(15),
          }}
        />
        <View style={styles.del}>
          <Text style={{fontSize: 10, fontWeight: '500'}}>
            delivery To 440030
          </Text>
          <Text
            style={{fontSize: 9, fontWeight: '500', color: 'rgba(0, 0, 0, 1)'}}>
            Someshwara Niwas,
          </Text>
          <Text style={{fontSize: 9, fontWeight: '500'}}>
            10, 16th B Cross Rd, Muneswara Nagar, 6th sector, HSR Layout,
            Bengaluru, Karnataka 560102
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.change}>
        <Text
          style={{
            fontSize: 11,
            fontWeight: '400',
            color: 'rgba(246, 86, 18, 1)',
          }}>
          change
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryStatus;

const styles = StyleSheet.create({
  delcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  maindelcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveHorizontal(329),
    marginHorizontal: responsiveHorizontal(15),
    borderWidth: 0.5,
    borderColor: 'rgba(246, 246, 246, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: responsiveHorizontal(15),
    borderRadius: responsiveHorizontal(4),
  },
  del: {
    width: responsiveHorizontal(184),
  },
  change: {
    width: responsiveHorizontal(61),
    height: responsiveVertical(27),
    borderWidth: 0.5,
    borderColor: 'rgba(246, 86, 18, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHorizontal(4),
  },
});
