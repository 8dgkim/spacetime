// src/screens/Direction.tsx

import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../styles/styles';

const Direction: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text_en}>Direction</Text>
    </View>
  );
};

export default Direction;
