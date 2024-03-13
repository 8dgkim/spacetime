/**
 * @format
 */

// src/App.tsx

import React from 'react';
import Permissions from './Permissions';
import Navigation from './Navigation';

const App: React.FC = () => {
  return (
    <>
      <Permissions />
      <Navigation />
    </>
  );
};

export default App;
