import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome";


const Tab = createBottomTabNavigator();
const AdminStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const ProfileStack = createStackNavigator();


import Admin from './Admin/Admin';
import SendNotification from './Admin/SendNotification';

import Home from './Home/Home';

import Profile from './Profile/Profile';
import Notifications from './Profile/Notifications';

import Schedule from './Schedule/Schedule';
import Booking from './Schedule/Booking';
import Payment from './Schedule/Payment';

const AdminNavigator = () => {
    return (
        <AdminStack.Navigator>
            <AdminStack.Screen name="AdminPage"
                component={Admin}
                options={{ headerShown: false }}
            />
            <AdminStack.Screen name="SendNotification"
                component={SendNotification}
                options={{ headerShown: false }}
            />
        </AdminStack.Navigator>
    )
}

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomePage" component={Home} options={{ headerShown: false }} />

            <HomeStack.Screen
                name="Notification"
                component={Notifications}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    )
}

const ScheduleNavigator = () => {
    return (
        <ScheduleStack.Navigator>
            <ScheduleStack.Screen
                name="SchedulePage"
                component={Schedule}
                options={{ headerShown: false }}
            />

            <ScheduleStack.Screen
                name='Booking'
                component={Booking}
                options={{ headerShown: false }}
            />
            <ScheduleStack.Screen
                name='Payment'
                component={Payment}
                options={{ headerShown: false }}
            />
        </ScheduleStack.Navigator>
    )
}

const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfilePage"
                component={Profile}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Notification"
                component={Notifications}
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    )
}

import React from 'react'
import Notificatios from './Profile/Notifications';

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#fff",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 51,
                    paddingBottom: 0,
                    paddingTop: 10,
                    paddingHorizontal: 10,
                    position: "absolute",
                    bottom: 2,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                },
                tabBarItemStyle: {
                    alignContent: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: 40,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold",
                },
                tabBarActiveTintColor: "#D41D77",
                tabBarInactiveTintColor: "black",
            })}
        >

            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Schedule" component={ScheduleNavigator} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
            <Tab.Screen name="Admin" component={AdminNavigator} />
        </Tab.Navigator>
    )
}

export default Tabs;

const styles = StyleSheet.create({})