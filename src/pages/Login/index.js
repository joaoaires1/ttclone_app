import React, { useContext } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'
import { UserContext } from '../../contexts/UserContext';

const Login = ({ navigation }) => {
    const context = useContext(UserContext);
    const user = context.user

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />

            <View style={{ flex: 1 }}>

                <View>
                    <Text style={styles.titleText}>Enter in Twitter.</Text>
                </View>
                
                <View style={styles.viewInput} >
                    <Text style={styles.labelInput}>Username</Text>
                    <TextInput style={styles.styleInput} />
                </View>

                <View style={styles.viewInput} >
                    <Text style={styles.labelInput}>Password</Text>
                    <TextInput style={styles.styleInput} />
                </View>

                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </>
    );

}

export default Login;