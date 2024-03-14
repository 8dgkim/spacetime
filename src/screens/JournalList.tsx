/* eslint-disable react-native/no-inline-styles */
// src/screens/JournalList.tsx

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Pressable, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import RNFS, {ExternalDirectoryPath} from 'react-native-fs';
import {commonStyles, journalStyles} from '../styles/styles';

const JournalList: React.FC = () => {
  // const handlePress = () => {
  //   console.log('works');
  // };
  const navigation = useNavigation();

  const [rectangles, setRectangles] = useState([]);
  const screenWidth = Dimensions.get('window').width;

  const handlePress = () => {
    navigation.navigate('Journal', {screen: 'Entry'});

    const boxWidth = screenWidth * 0.9;

    // Create a new rectangle box and add it to the list
    // Add properties
    const newRectangle = {
      id: rectangles.length + 1,
      width: boxWidth,
    };
    setRectangles(prevRectangles => [...prevRectangles, newRectangle]);
  };

  const renderRectangle = ({item}) => {
    return (
      <View
        style={{
          width: item.width,
          height: 56,
          backgroundColor: 'black',
          margin: 8,
          borderBottomWidth: 1,
          borderBottomColor: 'white',
          borderRightWidth: 1,
          borderRightColor: 'white',
          borderRadius: 8,
        }}>
        <Text style={commonStyles.text_en}>{item.id}</Text>
      </View>
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
      </View>
    </View>
  );
};

export default JournalList;
