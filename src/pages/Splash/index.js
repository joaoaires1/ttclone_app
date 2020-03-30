import React, { useContext, useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { IMAGE } from '../../utils/constants';
import { getData } from '../../utils/helpers';
import { callTimeline } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

const Splash = ({ navigation }) => {
    const { setUser, setTimeline } = useContext(UserContext);

    useEffect(() => {
        construct();
    }, []);
        
    const construct = async () => {
        const userStorage = await getData();

        try {
            if (userStorage.hasOwnProperty('name')) {
                
                const postsFromApi = await callTimeline(userStorage);
                const { data } = postsFromApi;
                await setUser(userStorage);
                await setTimeline(data.posts);
    
                navigation.navigate('Home');
            } else {
                navigation.navigate('Unauth');
            }  
        } catch (error) {
            navigation.navigate('Unauth');
        }
        
    }
        
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.tinyLogo} source={IMAGE.LOGO} />
        </View>
    );

}

export default Splash;