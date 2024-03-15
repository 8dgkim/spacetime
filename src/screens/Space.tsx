// src/screens/Space.tsx

import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../styles/styles';

const Space: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title_en}>Space</Text>
    </View>
  );
};

export default Space;
