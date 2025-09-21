import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import HomeNavigation from './HomeNavigation';
import Profile from '../screens/Profile';



const Drawer:any = createDrawerNavigator();

export default function MainNavigation() {
    return (
       
            <Drawer.Navigator
                drawerContent={(props:any) => <CustomDrawer {...props} />}
                screenOptions={{
                    drawerLabelStyle: { marginLeft: -25, fontSize: 17 },
                    drawerActiveBackgroundColor: 'white',
                    drawerActiveTintColor: 'black',
                    drawerInactiveTintColor: 'white',
                }
                }
            >
                <Drawer.Screen name='Home' component={HomeNavigation}
                    options={{
                        headerShown: false,
                        drawerIcon: ({ color, focused }) => (
                            <FontAwesome name="home" size={24} color={focused ? "black" : 'white'} />
                        )
                    }}

                />
               <Drawer.Screen name='Profile' component={Profile}
                    options={{
                        drawerIcon: ({ color, focused }) => (
                            <MaterialIcons name="add-box" size={24} color={focused ? "black" : "white"} />
                        ),
                        headerShown: false
                    }} />
            </Drawer.Navigator>
      
    );
}