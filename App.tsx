import React from 'react';
import { LocalizationProvider } from './contexts/LocalizationContext';
import StackNavigator from './navigation/StackNavigator';

const App = () => {
  return (
    <LocalizationProvider>
      <StackNavigator />
    </LocalizationProvider>
  );
};

export default App;
