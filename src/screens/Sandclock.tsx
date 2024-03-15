// src/screens/Sandclock.tsx

import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../styles/styles';

const Sandclock: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title_en}>Sandclock</Text>
    </View>
  );
};

export default Sandclock;
