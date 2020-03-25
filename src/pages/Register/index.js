import React from 'react';
import { StatusBar, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function RegisterScreen ({ navigation }) {
        
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <View style={{ flex: 1 }}>

                <View>
                    <Text style={styles.titleText}>Create your account</Text>
                </View>
                
                <View style={styles.viewInput} >
                    <TextInput placeholder="Name" style={styles.styleInput} />
                </View>

                <View style={styles.viewInput} >
                    <TextInput placeholder="Username" style={styles.styleInput} />
                </View>

                <View style={styles.viewInput} >
                    <TextInput placeholder="Email" style={styles.styleInput} />
                </View>

                <View style={styles.viewInput} >
                    <TextInput placeholder="Password" secureTextEntry={true} style={styles.styleInput} />
                </View>

                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </>
    );

}