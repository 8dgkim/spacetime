// src/screens/Journal.tsx

import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../styles/styles';

const Journal: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text_en}>Journal</Text>
    </View>
  );
};

export default Journal;
