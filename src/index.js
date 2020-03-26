import React from 'react';
import { StatusBar } from 'react-native'
import Routes from './routes'
import UserProvider from './contexts/UserContext'

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFF"/>
      
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;