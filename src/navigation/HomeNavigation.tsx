import * as React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*** import routes */
import MainTabNavigation from './MainTabNavigation';

const Stack:any = createNativeStackNavigator();



export default function HomeNavigation() {
  return (
          <>

      <Stack.Navigator >
           <Stack.Screen name="HomeTab" component={MainTabNavigation} options={{ headerShown: false }} />
           {/* <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{ headerShown: false }} />
           <Stack.Screen name="BeanDetailScreen" component={BeanDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CoffeeDetailScreen" component={CoffeeDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false }} />
            {/*<Stack.Screen name='AllReviewScreen' component={AllReviewScreen} options={{ headerShown: false }} />*/}
        </Stack.Navigator>
     </>   
    )
}

