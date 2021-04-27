/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component, Fragment} from 'react';

import AppStack from './src/screens/index';

declare const global: {HermesInternal: null | {}};

class App extends Component {
  render() {
    return <AppStack />;
  }
}

//TODO: screen 바로 아래 index.tsx 만들어서 스택스크린 전체 옮기기
// const App = () => {
//   return (
//     <Home/>

//   );
// };

export default App;
