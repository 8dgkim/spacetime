// src/screens/Journal.tsx

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import JournalList from './JournalList';
import Entry from './Entry';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JournalList">
        <Stack.Screen name="JournalList" component={JournalList} />
        <Stack.Screen name="EditScreen" component={Entry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
