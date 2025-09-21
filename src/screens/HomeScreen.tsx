/* components/ContactScreen.js */

import React, { Component } from "react";
import HeaderTabNavigationCustom from "../components/headerTabNavigationCustom";

import { Image, Pressable, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

//networking and types
import { fetchProducts } from '../ProductData/products-list';

//components


import { itemDetailSlice } from '../store/slices/item-detail-slice';
//import { useNavigation } from '@react-navigation/native';
import { Restaurent } from '../model/interfaces';
import { useAppDispatch } from '../store/store';
import { HomeNavigationProps } from '../model/root-stack-type';
import { RestaurentCard } from '../components/restaurent-card';
import Animated from 'react-native-reanimated';


export default function HomeScreen({navigation}) {

  const [product, setProducts] = useState<Restaurent[]>([]);
  const dispatch = useAppDispatch();
  //const navigation = useNavigation<HomeNavigationProps>('Home');
  //To fetch initial resturent data
  useEffect(() => {
    fetchProducts().then(products => {
    setProducts(products);
    });
  }, []);

  const handleOnPressHotelCard = (item: Restaurent) => {
    dispatch(itemDetailSlice.actions.setSelectedHotel(item));
    navigation.navigate('ItemDetails');
  };


  return (
    <>
    
   <SafeAreaView style={{height: '100%', backgroundColor: '#F5F5F5', marginBottom: 60, paddingBottom: 80}}> 
    <ScrollView showsVerticalScrollIndicator={true} >
      <HeaderTabNavigationCustom/>
     <View >
      {product.map((item: Restaurent) => (
        <Pressable key={item.id} onPress={() => handleOnPressHotelCard(item)}
         style={{marginBottom: 5}}>
          <Animated.View sharedTransitionTag={`${item.id}`}>
            <RestaurentCard product={item} />
          </Animated.View>
        </Pressable>
      ))}
    </View>
   </ScrollView>
  </SafeAreaView>  
    </>
  );
}