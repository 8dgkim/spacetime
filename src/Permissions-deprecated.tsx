// // src/Permissions.tsx

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import React, {useEffect, useState} from 'react';
// import {Text, View, Modal, Pressable} from 'react-native';
// import {requestStoragePermission} from './AndroidPermissions';
// import {permissionStyles} from './styles/styles';

// import React, {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';

const requestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'App needs access to your storage to save files.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Storage permission granted');
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export default requestStoragePermission;
