import './localization/i18n';
import React from 'react';
import { LocalizationProvider } from './contexts/LocalizationContext';
import StackNavigator from './navigation/StackNavigator';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <LocalizationProvider>
        <StackNavigator />
      </LocalizationProvider>
    </LanguageProvider>

  );
};

export default App;
