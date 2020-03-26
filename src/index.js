import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogoTitle from './components/LogoTitle'
import SplashScreen from './pages/Splash'
import LoginScreen from './pages/Login'
import RegisterScreen from './pages/Register'
import UnauthScreen from './pages/Unauth'
import HomeScreen from './pages/Home'

import UserProvider from './contexts/UserContext'

const Stack = createStackNavigator();

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

            <Stack.Screen name="Unauth" component={UnauthScreen} 
              options={{ 
                headerTitle: props => <LogoTitle {...props} />,
                headerTransparent:true,
                headerLeft: null,
                headerTitleAlign: 'center',
                headerTintColor: '#107c10'
              }}/>

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

            <Stack.Screen name="Home" component={HomeScreen} 
              options={{ 
                headerTitle: props => <LogoTitle {...props} />,
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