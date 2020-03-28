import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { IMAGE } from '../../utils/constants';
import { getData } from '../../utils/helpers';

const Splash = ({ navigation }) => {

    getData().then(data => {

        if (data.hasOwnProperty('name')) {
            setTimeout(function(){ 
                navigation.navigate('Home')
            }, 1000);
        } else {
            setTimeout(function(){ 
                navigation.navigate('Unauth')
            }, 1000);
        }

    })
        
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.tinyLogo} source={IMAGE.LOGO} />
        </View>
    );

}

export default Splash;