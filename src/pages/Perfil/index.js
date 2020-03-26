import React, { useContext } from 'react';
import { StatusBar, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const Perfil = ({ navigation }) => {

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <CustomHeader navigation={navigation} />
            <Text>Perfil</Text>
        </>
    );
}

export default Perfil;