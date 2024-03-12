/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {getTheme} from './styles/theme';
// import {getDefaultFontStyle, getHangulFontStyle} from './styles/fonts';

// const App: React.FC = () => {
//   const theme = getTheme();
//   const defaultFontStyle = getDefaultFontStyle();
//   const hangulFontStyle = getHangulFontStyle();

//   return (
//     <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
//       <Text style={[styles.text, defaultFontStyle, {color: theme.textColor}]}>
//         Hello React Native!
//       </Text>
//       <Text style={[styles.text, hangulFontStyle, {color: theme.textColor}]}>
//         한글 텍스트 (Hangul Text)
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//   },
// });

// export default App;

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
