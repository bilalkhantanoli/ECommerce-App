import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProductDetails from "../screens/ProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import Favorite from '../screens/Favorite';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#E96E6E",
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Entypo
                            name="home"
                            size={size}
                            color={focused ? "#E96E6E" : "black"}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="List"
                component={Favorite}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons
                            name='dehaze'
                            size={size}
                            color={focused ? '#E96E6E' : 'black'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesign
                            name="shoppingcart"
                            size={size}
                            color={focused ? "#E96E6E" : "black"}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            size={size}
                            color={focused ? "#E96E6E" : "black"}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeTabs'>
                <Stack.Screen name="HomeTabs" component={HomeTabNavigator} />
                <Stack.Screen name="CartScreen" component={CartScreen} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
