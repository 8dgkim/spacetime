/* eslint-disable react/no-unstable-nested-components */
// src/Navigation.tsx

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import Space from './screens/Space';
import Sandclock from './screens/Sandclock';
import Time from './screens/Time';
import Direction from './screens/Direction';
import Journal from './screens/Journal';

const Tab = createBottomTabNavigator();

const commonScreenOptions = {
  headerShown: false,
  tabBarShowLabel: false, // change to false
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: 'white', // change to some cool color
  tabBarInactiveTintColor: 'grey', // change to white
  tabBarStyle: {
    backgroundColor: 'black',
    height: 70,
    borderTopWidth: 0,
    elevation: 0, // for Android
    shadowOffset: {
      width: 0,
      height: 0, // for iOS
    },
  },
};

const Navigation: React.FC = () => {
  // TODO
  // StatusBar -> hide status bar for all screens
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Journal" // TODO: change for dev & debug mode
        backBehavior="history"
        screenOptions={commonScreenOptions}>
        <Tab.Screen
          name="Space"
          component={Space}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="map-marker"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Sandclock"
          component={Sandclock}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="hourglass" color={color} size={size} /> // hourglass-outline
            ),
          }}
        />
        <Tab.Screen
          name="Time"
          component={Time}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="checkbox-blank-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Direction"
          component={Direction}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="question-mark" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Journal"
          component={Journal}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="file-document-edit-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
