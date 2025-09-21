import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from '../firebase/firebaseConfig'; // Assuming you have your firebase config set up
import SignInScreen from "../screens2/SignInScreen";
import SignUpScreen from "../screens2/sign-up";

// isAuthenticated routes
import { ItemDetailsViewContainer } from '../screens/item-details-view';
import { CartViewContainer } from '../components/cart-view-container';
import { CartButton } from '../components/cart-button'


import { RootStackParamList } from "../../types";
import MainNavigation from "./HomeNavigation";

import { useAppSelector } from '../store/store';
import { useNavigation } from '@react-navigation/native';

const Stack:any = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {

  const cartItemCount = useAppSelector(state => state.cart.count);
  const navigation:any = useNavigation();
  const onPressCartButton = () => {
    navigation.navigate('Cart');
  };
  const [isAuthenticated, setIsAuthenticated]:any = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);

  return (
            <>
      <Stack.Navigator screenOptions={{ title: 'Chicken Restaurants', headerTitleAlign: 'center' }}>
      {!isAuthenticated && (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
        </>
      )}
      {isAuthenticated && (
        <>
          <Stack.Group
        screenOptions={{
          headerRight: () => (
            <CartButton count={cartItemCount} onPress={onPressCartButton} />
          ),
        }}>
           <Stack.Screen 
             name="MainNavigation" 
             component={MainNavigation} 
             options={{ headerShown: false }}/>

            <Stack.Screen 
              name="ItemDetails" 
              component={ItemDetailsViewContainer}
              options={{ headerShown: true }} />
            <Stack.Screen
              name="Cart"
              component={CartViewContainer}
              options={{ title: 'FCart' }}
      />  
      </Stack.Group>
        </>
        
      )}  

    </Stack.Navigator>

  </> 

  );
};

export default function Navigation() {
  return (
    <NavigationContainer> 
     <RootNavigator />
    </NavigationContainer>
  );
}
