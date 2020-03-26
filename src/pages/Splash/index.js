import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import styles from './styles'

import { UserContext } from '../../contexts/UserContext';

export default function SplashScreen ({ navigation }) {
    const context = useContext(UserContext);
    const user = context.user

    if (user) {
        setTimeout(function(){ 
            navigation.navigate('Unauth')
        }, 1000);
    }
        
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.tinyLogo} source={require('../../assets/twitter.png')} />
        </View>
    );

}