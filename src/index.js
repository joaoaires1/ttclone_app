import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LogoTitle from './components/LogoTitle'
import SplashScreen from './pages/Splash'
import LoginScreen from './pages/Login'
import RegisterScreen from './pages/Register'
import UnauthScreen from './pages/Unauth'
import HomeScreen from './pages/Home'
import SearchScreen from './pages/Search'
import PerfilScreen from './pages/Perfil'

import UserProvider from './contexts/UserContext'
import { TouchableOpacity } from 'react-native-gesture-handler';

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

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#eee' }}>
        <View style={{ marginLeft: 20 }}>
          <Image
            source={require('./assets/account.png')}
            style={{ width: 50, height: 50, marginTop: 15 }}
          />
        </View>

        <View style={{ marginLeft: 20, marginTop: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>Joao Aires</Text>
          <Text>@airesjoao</Text>
        </View>

        <View style={{ marginLeft: 20, marginTop: 8, marginBottom: 8, flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>12</Text>
          <Text style={{ marginLeft: 5 }}>Seguindo</Text>
          <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>20</Text>
          <Text style={{ marginLeft: 5 }}>Seguidores</Text>
        </View>

      </View>
      <ScrollView>

        <TouchableOpacity
          style={{ marginBottom: 15, marginTop: 15, marginLeft: 20 }}
          onPress={() => props.navigation.navigate('Perfil')}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image 
              source={require('./assets/perfil-black.png')}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            <Text>Perfil</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>

      <View style={{ borderTopColor: '#eee', borderTopWidth: 1 }}>
        <TouchableOpacity
            style={{ marginBottom: 15, marginTop: 15, marginLeft: 20, justifyContent: 'center' }}
            onPress={() => props.navigation.navigate('Unauth')}
          >
          <View style={{ flexDirection: 'row' }}>
            <Image 
              source={require('./assets/signout.png')}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            <Text>Sign out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function drawerScreen() {
  return (
      <Drawer.Navigator initialRouteName="Home"
        drawerContent={props => CustomDrawerContent(props)}
      >
        <Drawer.Screen name="Home" component={HomeTabScreen} />
        <Drawer.Screen name="Search" component={SearchTabScreen} />
        <Drawer.Screen name="Perfil" component={PerfilTabScreen} />
      </Drawer.Navigator>
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

            <Stack.Screen name="Home" component={drawerScreen} 
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