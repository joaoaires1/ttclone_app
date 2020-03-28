import React, { useContext, useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from './styles'
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';
import * as yup from 'yup';
import { storeData } from '../../utils/helpers';

const Login = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()
    });

    /**
     * Handle login press to call login endpoint
     */
    const handleValidateForm = async () => {

        schema.validate({
            username: username,
            password: password
        })
        .then(() => {
            Keyboard.dismiss();
            handleSignIn();
        })
        .catch(function(err) {
            setError(err.errors[0]);
        });
            
    }

    const handleSignIn = async () => {
        try {
            const response = await api.post('/login', {
                username,
                password
            });
            
            storeData(response.data);
            navigation.navigate('Home');
        } catch (error) {
            setError('Error in sing in, check your credentials.');
        }
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />

            <View style={{ flex: 1 }}>

                <View>
                    <Text style={styles.titleText}>Enter in Twitter.</Text>
                </View>
                
                <View style={styles.viewInput} >
                    <Text style={styles.labelInput}>Username</Text>
                    <TextInput 
                        style={ styles.styleInput }
                        onChangeText={text => setUsername(text)} 
                    />
                </View>

                <View style={styles.viewInput} >
                    <Text style={styles.labelInput}>Password</Text>
                    <TextInput 
                        style={ styles.styleInput } 
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <Text style={styles.errorText}>{ error }</Text>

                <View style={styles.viewButton}>
                    <TouchableOpacity 
                        style={styles.loginButton}
                        onPress={handleValidateForm} 
                    >
                        <Text style={styles.loginText}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </>
    );

}

export default Login;