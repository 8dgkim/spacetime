// src/styles/styles.ts

// commonStyles
// spaceStyles
// directionStyles
// permissionStyles
// journalStyles

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
  title_en: {
    fontSize: 30,
    fontFamily: 'times',
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    color: 'white',
  },
  title_kr: {
    fontSize: 30,
    fontFamily: 'NanumMyeongjoBold',
    color: 'white',
  },
  text_en: {
    fontSize: 15,
    fontFamily: 'times',
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    color: 'white',
  },
  text_kr: {
    fontSize: 18,
    fontFamily: 'NanumMyeongjoBold',
    color: 'white',
    width: '92%',
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

export const spaceStyles = StyleSheet.create({
  grid: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  row: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 6,
  },
  space: {
    fontSize: 30,
    fontFamily: 'times',
    fontWeight: 'bold',
    color: 'white',
    marginVertical: -3,
  },
  humble: {
    fontSize: 12,
    fontFamily: 'NanumMyeongjoBold',
    marginTop: 10,
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

export const permissionStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderTopColor: 'white',
    borderTopWidth: 2,
    width: '90%',
    height: 100,
    borderRadius: 8,
    elevation: 0,
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'times',
    fontStyle: 'italic',
    color: 'white',
  },
  modalContentOnPressed: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    width: '100%',
    height: 80,
    borderRadius: 5,
    elevation: 0,
  },
});

export const journalStyles = StyleSheet.create({
  header: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  line: {
    width: '85%',
    backgroundColor: 'white',
    height: 1.5,
  },
  list: {
    flex: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  flatlist: {
    width: '100%',
  },
  new: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '92%',
    height: '100%',
    backgroundColor: 'black',
    // borderColor: 'white',
    borderBottomColor: 'white',
    borderTopColor: 'white',
    borderWidth: 0.8,
  },
  pressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  pressableText: {
    fontSize: 18,
    fontFamily: 'times',
    fontStyle: 'italic',
    color: 'white',
  },
});

export const entryStyles = StyleSheet.create({
  input: {
    flex: 1,
    width: '94%',
    borderColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    fontSize: 18,
    fontFamily: 'times',
    color: 'white',
    textAlignVertical: 'top',
  },
});
