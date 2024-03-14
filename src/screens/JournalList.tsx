/* eslint-disable react-native/no-inline-styles */
// src/screens/JournalList.tsx

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Pressable, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNFS, {ExternalDirectoryPath} from 'react-native-fs';
import {commonStyles, journalStyles} from '../styles/styles';
import Entry from './Entry';

const JournalList: React.FC = () => {
  // const handlePress = () => {
  //   console.log('works');
  // };

  const [rectangles, setRectangles] = useState([]);
  const screenWidth = Dimensions.get('window').width;

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Journal', {screen: 'Entry'});

    const boxWidth = screenWidth * 0.9;

    // Create a new rectangle box and add it to the list
    const newRectangle = {
      id: rectangles.length + 1,
      color: 'red',
      width: boxWidth,
      height: 60,
    };
    setRectangles(prevRectangles => [...prevRectangles, newRectangle]);
  };

  const renderRectangle = ({item}) => {
    return (
      <View
        style={{
          width: item.width,
          height: item.height,
          backgroundColor: item.color,
          margin: 5,
        }}
      />
    );
  };

  return (
    <View style={commonStyles.container}>
      <View style={journalStyles.header}>
        <Text style={commonStyles.title_en}>Journal</Text>
        <View style={{flex: 0.1}} />
        <View style={journalStyles.line} />
      </View>
      <View style={journalStyles.list}>
        <FlatList
          data={rectangles}
          renderItem={renderRectangle}
          keyExtractor={item => item.id.toString()}
          horizontal={false}
          style={journalStyles.flatlist}
          contentContainerStyle={{alignItems: 'center'}}
        />
      </View>
      <View style={journalStyles.new}>
        <Pressable onPressIn={handlePress} style={journalStyles.pressable}>
          <Text style={journalStyles.pressableText}>write...</Text>
        </Pressable>
        {/* <Text>test3</Text> */}
      </View>
    </View>
  );
};

export default JournalList;
