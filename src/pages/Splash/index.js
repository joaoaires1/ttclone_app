import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { IMAGE } from '../../utils/constants';
import { UserContext } from '../../contexts/UserContext';

const Splash = ({ navigation }) => {
    const context = useContext(UserContext);
    const user = context.user

    if (user) {
        setTimeout(function(){ 
            navigation.navigate('Home')
        }, 1000);
    }
        
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.tinyLogo} source={IMAGE.LOGO} />
        </View>
    );

}

export default Splash;