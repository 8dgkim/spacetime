// src/screens/Space.tsx

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {commonStyles, spaceStyles} from '../styles/styles';
import Geolocation from '@react-native-community/geolocation';
import GradientText from '../styles/GradientText';

// Function to convert decimal degrees to degrees, minutes, and seconds
const convertToDMS = (coord: number, isLatitude: boolean) => {
  const absolute = Math.abs(coord);
  const degrees = Math.floor(absolute);
  const minutes = Math.floor((absolute - degrees) * 60);
  const seconds = ((absolute - degrees - minutes / 60) * 3600).toFixed(2);

  const direction = isLatitude
    ? coord > 0
      ? 'N'
      : 'S'
    : coord > 0
    ? 'E'
    : 'W';

  return {
    degrees,
    minutes,
    seconds,
    direction,
  };
};

const Space: React.FC = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      Geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          console.log(error.code, error.message);
        },
        // `timeout`: max length of time (in milliseconds) the device is allowed to take in order to return a position
        // `maximumAge`: max age in milliseconds of a possible cached position that is acceptable to return
        {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000},
      );
    }, 5000); // update current position every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={commonStyles.container}>
      {/* <Text style={commonStyles.title_en}>Space</Text> */}
      {latitude && longitude ? (
        <View style={spaceStyles.grid}>
          <View style={spaceStyles.row}>
            <Text style={spaceStyles.space}>
              {convertToDMS(latitude, true).degrees}°
            </Text>
            <Text style={spaceStyles.space}>
              {convertToDMS(longitude, false).degrees}°
            </Text>
          </View>
          <View style={spaceStyles.row}>
            <Text style={spaceStyles.space}>
              {convertToDMS(latitude, true).minutes}'
            </Text>
            <Text style={spaceStyles.space}>
              {convertToDMS(longitude, false).minutes}'
            </Text>
          </View>
          <View style={spaceStyles.row}>
            <Text style={spaceStyles.space}>
              {convertToDMS(latitude, true).seconds}"
            </Text>
            <Text style={spaceStyles.space}>
              {convertToDMS(longitude, false).seconds}"
            </Text>
          </View>
          <View style={spaceStyles.row}>
            <Text style={spaceStyles.space}>
              {convertToDMS(latitude, true).direction}
            </Text>
            <Text style={spaceStyles.space}>
              {convertToDMS(longitude, false).direction}
            </Text>
          </View>
        </View>
      ) : (
        <Text style={commonStyles.text_en}>Loading...</Text>
      )}
      <GradientText style={spaceStyles.humble}>
        우주 : 초은하단 : 국부 은하군 : 우리 은하 : 오리온 팔 : 태양계 : 지구
      </GradientText>
    </View>
  );
};

export default Space;
