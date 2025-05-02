import React from 'react';
import { LocalizationProvider } from './contexts/LocalizationContext';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <LocalizationProvider>
      <HomeScreen />
    </LocalizationProvider>
  );
};

export default App;
