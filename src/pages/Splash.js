import React, { useContext } from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';

import { UserContext } from '../contexts/UserContext';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

export default function SplashScreen ({ navigation }) {
    const context = useContext(UserContext);
    const user = context.user

    if (user) {
        setTimeout(function(){ 
            navigation.navigate('Login')
        }, 1000);
    }
        
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' }}>
            <Image style={styles.tinyLogo} source={require('../assets/twitter.png')} />
        </View>
    );

}