import React, { useContext } from 'react';
import { StatusBar, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const Perfil = () => {

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <CustomHeader />
            <Text>Perfil</Text>
        </>
    );
}

export default Perfil;