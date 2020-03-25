import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './pages/Splash'
import LoginScreen from './pages/Login'
import RegisterScreen from './pages/Register'

import UserProvider from './contexts/UserContext'

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require('../src/assets/twitter.png')}
    />
  );
}

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFF"/>

      <NavigationContainer>

        <UserProvider>
          <Stack.Navigator>

            <Stack.Screen name="Splash" component={SplashScreen} options={{
              title: '',
              headerTransparent:true,
            }} />

            <Stack.Screen name="Register" component={RegisterScreen} 
              options={{ 
                headerTitle: props => <LogoTitle {...props} />,
                headerTransparent:true,
                headerTitleAlign: 'center',
                headerTintColor: '#107c10'
              }}/>

            <Stack.Screen name="Login" component={LoginScreen} 
              options={{ 
                headerTitle: props => <LogoTitle {...props} />,
                headerTransparent:true,
                headerTitleAlign: 'center',
                headerTintColor: '#107c10'
              }}/>

          </Stack.Navigator>
        </UserProvider>
        
      </NavigationContainer>
    </>
  );
}

export default App;