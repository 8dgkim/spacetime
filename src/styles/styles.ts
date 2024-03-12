// styles.ts

import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text_en: {
    fontSize: 20,
    fontFamily: 'times',
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    color: 'white',
  },
  text_kr: {
    fontSize: 20,
    fontFamily: 'NanumMyeongjoBold',
    color: 'white',
  },
});
