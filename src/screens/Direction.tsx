/* eslint-disable react-native/no-inline-styles */
// src/screens/Direction.tsx

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {commonStyles, directionStyles} from '../styles/styles';
// import Time from './Time';
// import ScrollPicker from "react-native-wheel-scrollview-picker"; // try this later

const Direction: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [targetTime, setTargetTime] = useState('');
  const [timeDistance, setTimeDistance] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10); // Update `currentTime` every 10 milliseconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Calculate time distance whenever `targetTime` or `currentTime` changes
    calculateDistance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetTime, currentTime]);

  // Receive input from TextInput and parse data
  const handleInputChange = (text: string) => {
    // Remove any non-numeric characters from the input string
    const numericText = text.replace(/\D/g, '');

    // Fill in missing parts with zeros
    const paddedText = numericText.padEnd(12, '0');

    // Set the target time state
    setTargetTime(paddedText);
  };

  const calculateDistance = () => {
    if (targetTime === '') {
      // Clear timeDistance if targetTime is empty
      setTimeDistance('');
      return;
    }

    // Get the current time
    const now = new Date();

    // Extract year, month, day, hour, and minute from the input string
    const year = parseInt(targetTime.substring(0, 4), 10);
    const month = parseInt(targetTime.substring(4, 6), 10) - 1; // Months are zero-based
    const day = parseInt(targetTime.substring(6, 8), 10);
    const hour = parseInt(targetTime.substring(8, 10), 10);
    const minute = parseInt(targetTime.substring(10, 12), 10);

    // Create a Date object for the target time
    const targetDateTime = new Date(year, month, day, hour, minute);

    // Calculate the time difference in milliseconds
    const differenceInMillis = targetDateTime.getTime() - now.getTime();

    // Display the time difference only if it's greater than or equal to zero
    if (differenceInMillis >= 0) {
      // Convert milliseconds to days, hours, minutes, and seconds
      const days = String(
        Math.floor(differenceInMillis / (1000 * 60 * 60 * 24)),
      ).padStart(2, '0');
      const hours = String(
        Math.floor(
          (differenceInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
      ).padStart(2, '0');
      const minutes = String(
        Math.floor((differenceInMillis % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      const seconds = String(
        Math.floor((differenceInMillis % (1000 * 60)) / 1000),
      ).padStart(2, '0');

      // Display the time difference
      setTimeDistance(`${days} :: ${hours}:${minutes}:${seconds}`);
    } else {
      // Clear the time difference if the difference is negative
      // TODO: Modify this later to reflect past timeDistance
      setTimeDistance('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={commonStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={commonStyles.inner}>
        <Text style={commonStyles.title_en}>Direction</Text>
        <View style={{height: 30}} />
        <TextInput
          style={directionStyles.input}
          placeholder="enter target coordinate"
          placeholderTextColor="grey"
          textAlign="center"
          keyboardType="numeric"
          onChangeText={handleInputChange}
        />
        <View style={{height: 10}} />
        {targetTime !== '' && (
          <Text style={commonStyles.time_date}>{timeDistance}</Text>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Direction;
