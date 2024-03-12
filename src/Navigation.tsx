// src/Navigation.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Space from './screens/Space';
import Sandclock from './screens/Sandclock';
import Time from './screens/Time';
import Direction from './screens/Direction';
import Journal from './screens/Journal';

const Tab = createBottomTabNavigator();

const navigatorOptions = {
  headerShown: false,
//   tabBarStyle: {
//     backgroundColor: 'black',
//   },
//   tabBarLabelStyle: {
//     color: 'red',
//   },
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={navigatorOptions}>
        {/* Remove names later */}
        <Tab.Screen name="Space" component={Space} />
        <Tab.Screen name="Sandclock" component={Sandclock} />
        <Tab.Screen name="Time" component={Time} />
        <Tab.Screen name="Direction" component={Direction} />
        <Tab.Screen name="Journal" component={Journal} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
