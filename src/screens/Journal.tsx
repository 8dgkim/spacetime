// src/screens/Journal.tsx

// TODO
// use react-native-fs for direct externaldirectory access and read write access
// use FlatList for list of entries

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  // FlatList,
} from 'react-native';
import RNFS from 'react-native-fs';
import {commonStyles} from '../styles/styles';

const Journal: React.FC = () => {
  // TODO: experiment; remove later
  const [downloadsFolder, setDownloadsFolder] = useState('');
  const [documentsFolder, setDocumentsFolder] = useState('');
  const [externalDirectory, setExternalDirectory] = useState('');
  // const [files, setFiles] = useState([]);
  useEffect(() => {
    //get user's file paths from react-native-fs
    setDownloadsFolder(RNFS.DownloadDirectoryPath);
    setDocumentsFolder(RNFS.DocumentDirectoryPath); //alternative to MainBundleDirectory.
    setExternalDirectory(RNFS.ExternalStorageDirectoryPath);
  }, []);

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text_en}>Journal</Text>
      <Text>Downloads: {downloadsFolder}</Text>
      <Text>Documents: {documentsFolder}</Text>
      <Text>External storgage: {externalDirectory}</Text>
    </View>
  );
};

export default Journal;
