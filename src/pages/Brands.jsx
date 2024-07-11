import React from 'react';
import {View, Text} from 'react-native';
import ShoppingCart from "./ShoppingCart"
import CustomHeader from '../customComponent/CustomHeader';
const Brands = () => {
  return (
    <>
    <CustomHeader title={'Brands'} />

    <ShoppingCart/>
    </>
  );
};
export default Brands;
