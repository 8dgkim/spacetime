// src/Permissions.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useEffect, useState} from 'react';
import {Text, View, Modal, Pressable} from 'react-native';
import {requestStoragePermission} from './AndroidPermissions';
import {permissionStyles} from './styles/styles';

const Permissions: React.FC = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem('@app:firstLaunch');
        if (value === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem('@app:firstLaunch', 'true');
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
      }
    };

    checkFirstLaunch();
  }, []);

  const handlePermissionRequest = async () => {
    const granted = await requestStoragePermission();
    if (granted) {
      console.log('Storage permission granted');
    } else {
      console.log('Storage permission denied');
    }
    setIsModalVisible(false); // Close the modal after permission request
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isFirstLaunch) {
      setIsModalVisible(true);
    }
  }, [isFirstLaunch]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={handleModalClose}>
      <View style={permissionStyles.modalContainer}>
        <Pressable
          style={({pressed}) => [
            permissionStyles.modalContent,
            pressed ? permissionStyles.modalContentOnPressed : null,
          ]}
          onPress={handlePermissionRequest}>
          <Text style={permissionStyles.modalText}>
            Grant permissions to the app...
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default Permissions;
