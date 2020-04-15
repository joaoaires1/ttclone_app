import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { UserContext } from '../../contexts/UserContext';

export default EditPerfil = ({ navigation}) => {
    const { user } = useContext(UserContext);
        
    return (
        <>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 15
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 30,
                    alignItems: 'center',
                    
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ marginLeft: 5 }}
                    >
                        <Icon name='arrow-left' size={25} color='#107c10' />
                    </TouchableOpacity>

                    <View style={{
                        marginLeft: 25
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Edit perfil</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={{ 
                        height: 30,
                        flexDirection: 'row', 
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#107c10' }}>SAVE</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View>
                <View style={{ 
                    backgroundColor: '#107c10',
                    height: 135,
                    width: '100%'
                }}></View>
                <View style={{
                    paddingHorizontal: 15,
                    position: 'relative',
                    height: 65
                }}>
                    <Image
                        source={{ uri: user.avatar }}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 50,
                            borderColor: '#eee',
                            borderWidth: 4,
                            position: 'absolute',
                            top: -35,
                            left: 15
                        }}
                    />
                </View>
                <View style={{
                    paddingHorizontal: 15
                }}>
                    <Text style={{ color: '#657786' }}>Name</Text>
                    <TextInput
                        value={user.name} 
                        style={{
                        borderColor: '#ccc', 
                        borderBottomWidth: 1
                    }}
                    />
                </View>
            </View>
        </>
    );
}