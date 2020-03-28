import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LogoTitle from '../components/LogoTitle'
import SplashScreen from '../pages/Splash'
import LoginScreen from '../pages/Login'
import RegisterScreen from '../pages/Register'
import UnauthScreen from '../pages/Unauth'
import HomeScreen from '../pages/Home'
import SearchScreen from '../pages/Search'
import PerfilScreen from '../pages/Perfil'

import { IMAGE } from '../utils/constants'
import CustomDrawerContent from '../components/CustomDrawerContent'
import { UserContext } from '../contexts/UserContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? IMAGE.HOME
              : IMAGE.HOME_BLACK;
          } else if (route.name === 'Search') {
            iconName = focused 
              ? IMAGE.SEARCH
              : IMAGE.SEARCH_BLACK;
          } else if (route.name === 'Perfil') {
            iconName = focused 
              ? IMAGE.PERFIL
              : IMAGE.PERFIL_BLACK;
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
      })}
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

function SearchTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? IMAGE.HOME
              : IMAGE.HOME_BLACK;
          } else if (route.name === 'Search') {
            iconName = focused 
              ? IMAGE.SEARCH
              : IMAGE.SEARCH_BLACK;
          } else if (route.name === 'Perfil') {
            iconName = focused 
              ? IMAGE.PERFIL
              : IMAGE.PERFIL_BLACK;
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
      })}
      initialRouteName="Search"
      tabBarOptions={{
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

function PerfilTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? IMAGE.HOME
              : IMAGE.HOME_BLACK;
          } else if (route.name === 'Search') {
            iconName = focused 
              ? IMAGE.SEARCH
              : IMAGE.SEARCH_BLACK;
          } else if (route.name === 'Perfil') {
            iconName = focused 
              ? IMAGE.PERFIL
              : IMAGE.PERFIL_BLACK;
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
      })}
      initialRouteName="Perfil"
      tabBarOptions={{
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

function drawerScreen() {
  const { user } = useContext(UserContext);

  return (
      <Drawer.Navigator initialRouteName="Home"
        drawerContent={({navigation}) => <CustomDrawerContent navigation={navigation} UserContext={user} />}
      >
        <Drawer.Screen name="Home" component={HomeTabScreen} />
        <Drawer.Screen name="Search" component={SearchTabScreen} />
        <Drawer.Screen name="Perfil" component={PerfilTabScreen} />
      </Drawer.Navigator>
  );
}

function Routes() {
  return (
      <NavigationContainer>

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

            <Stack.Screen name="Home" component={drawerScreen} 
              options={{ 
                title: '',
                headerTransparent:true,
                headerLeft: null
              }}/> 

          </Stack.Navigator>
        
      </NavigationContainer>
  );
}

export default Routes;