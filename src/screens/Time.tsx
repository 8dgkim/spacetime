/* eslint-disable react-native/no-inline-styles */
// src/screens/Time.tsx

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../styles/styles';

const Time: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1); // update `currentTime` every 1 millisecond

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}:${month}:${day}`;
  };

  const formatTime = (time: Date) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    const milliseconds = String(time.getMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.time_date}>{formatDate(currentTime)}</Text>
      <View style={{height: 10}} />
      <Text style={commonStyles.time_time}>{formatTime(currentTime)}</Text>
    </View>
  );
};

export default Time;
