import React, { useContext } from 'react';
import { StatusBar, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const Home = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <CustomHeader navigation={navigation} />
            <Text>Home</Text>
        </>
    );
}

export default Home;