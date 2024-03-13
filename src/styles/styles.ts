// styles.ts

import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  inner: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
  text_en: {
    fontSize: 30,
    fontFamily: 'times',
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    color: 'white',
  },
  text_kr: {
    fontSize: 30,
    fontFamily: 'NanumMyeongjoBold',
    color: 'white',
  },
  time_date: {
    fontSize: 30,
    fontFamily: 'times',
    fontWeight: 'bold',
    color: 'white',
  },
  time_time: {
    fontSize: 40,
    fontFamily: 'times',
    fontWeight: 'bold',
    color: 'white',
  },
});

export const directionStyles = StyleSheet.create({
  input: {
    width: '92%',
    height: 40,
    paddingHorizontal: 10,
    borderColor: 'white',
    borderBottomWidth: 1,
    borderRadius: 4,
    fontSize: 18,
    fontFamily: 'times',
    color: 'white',
    textAlignVertical: 'center',
  },
});
