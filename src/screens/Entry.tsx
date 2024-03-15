/* eslint-disable react-native/no-inline-styles */
// src/screens/Entry.tsx

import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {commonStyles, entryStyles} from '../styles/styles';

const Entry = () => {
  const [text, setText] = useState('');

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title_en}>Entry</Text>
      <View style={{height: 10}} />
      <TextInput
        style={entryStyles.input}
        value={text}
        onChangeText={setText}
        multiline={true}
      />
    </View>
  );
};

export default Entry;
