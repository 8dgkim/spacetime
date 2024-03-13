// src/AndroidPermissions.ts

import {PermissionsAndroid} from 'react-native';

export const requestStoragePermission = async (): Promise<boolean> => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Journal App Storage Permission',
        message:
          'Journal App needs access to your storage ' +
          'to save your journal entries.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.warn('Error requesting storage permission:', error);
    return false;
  }
};
