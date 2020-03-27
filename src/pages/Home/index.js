import React, { useContext } from 'react';
import { StatusBar, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { UserContext } from '../../contexts/UserContext';
import { getData } from '../../utils/helpers';

const Home = ({ navigation }) => {
    const context = useContext(UserContext);
    const user = context.user

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <CustomHeader navigation={navigation} />
            <Text>Home {user.name}</Text>
        </>
    );
}

export default Home;