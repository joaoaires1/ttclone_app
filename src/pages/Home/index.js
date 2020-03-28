import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { UserContext } from '../../contexts/UserContext';
import { getData } from '../../utils/helpers';

const Home = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext);
    const update = '';

    useEffect(() => {

        getData().then(data => setUser(data));

    }, [update]);
    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <CustomHeader navigation={navigation} />
            <Text>Home {user.name}</Text>
        </>
    );
}

export default Home;