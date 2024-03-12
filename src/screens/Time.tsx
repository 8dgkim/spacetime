// src/screens/Time.tsx

import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../styles/styles';

const Time: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text_en}>Time</Text>
      <Text style={commonStyles.text_kr}>시간</Text>
    </View>
  );
};

export default Time;
