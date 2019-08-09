import React from 'react';
import { YellowBox } from 'react-native';

import Routes from './routes';

YellowBox.ignoreWarnings(['Remote debugger']);

const App = () => {
  return (
    <Routes/>
  );
};

export default App;