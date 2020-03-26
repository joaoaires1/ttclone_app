import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LogoTitle from './components/LogoTitle'
import SplashScreen from './pages/Splash'
import LoginScreen from './pages/Login'
import RegisterScreen from './pages/Register'
import UnauthScreen from './pages/Unauth'
import HomeScreen from './pages/Home'
import SearchScreen from './pages/Search'
import PerfilScreen from './pages/Perfil'

import UserProvider from './contexts/UserContext'

const Stack = createStackNavigator();

const HomeTab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <HomeTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./assets/home.png')
              : require('./assets/home-black.png');
          } else if (route.name === 'Search') {
            iconName = focused 
              ? require('./assets/search.png')
              : require('./assets/search-black.png');
          } else if (route.name === 'Perfil') {
            iconName = focused 
              ? require('./assets/perfil.png')
              : require('./assets/perfil-black.png');
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
      })}
      tabBarOptions={{
        showLabel: false
      }}
    >
      <HomeTab.Screen name="Home" component={HomeScreen} />
      <HomeTab.Screen name="Search" component={SearchScreen} />
      <HomeTab.Screen name="Perfil" component={PerfilScreen} />
    </HomeTab.Navigator>
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

            <Stack.Screen name="Home" component={HomeTabScreen} 
              options={{ 
                title: '',
                headerTransparent:true,
                headerLeft: null
              }}/> 

          </Stack.Navigator>
        </UserProvider>
        
      </NavigationContainer>
    </>
  );
}

export default App;