import React from 'react';
import { StatusBar, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function RegisterScreen ({ navigation }) {

    const goToScreen = screen => {
        navigation.navigate(screen)
    }
        
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <View style={styles.fraseContainer}>
                <Text style={styles.fraseText}>See what's going on in the world right now.</Text>

                <TouchableOpacity style={styles.signupButton} onPress={() => goToScreen('Register')}>
                    <Text style={styles.signupText}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.loginText}>
                    Already have an account?
                    <Text onPress={() => goToScreen('Login')} style={{color: '#107c10'}}> Login</Text>
                </Text>
            </View>
        </>
    );

}