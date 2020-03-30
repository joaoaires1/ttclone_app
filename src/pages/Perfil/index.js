import React, { useContext } from 'react';
import { StatusBar, View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { IMAGE } from '../../utils/constants';
import { UserContext } from '../../contexts/UserContext';
import { callPerfilPosts } from '../../services/api';

const Perfil = ({ navigation }) => {
    const { user } = useContext(UserContext);

    console.log(user);

    const construct = async () => {
        const postsFromServer = await callPerfilPosts(user);

        console.log(postsFromServer);
        
    }

    construct();
    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            
            <View>
                <View style={styles.cover}>
                    <TouchableOpacity style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Image 
                            source={IMAGE.BACK}
                            style={{ width: 17, height: 17 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerStats}>
                    <View>
                        <Image 
                            source={{ uri: user.avatar }}
                            style={styles.perfilImage}
                        />

                        <TouchableOpacity style={styles.buttonPerfil}>
                            <Text style={styles.buttonText}>Edit perfil</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 7 }}>
                        <Text style={styles.textName}>{user.name}</Text>
                        <Text style={styles.textUsername}>@{user.username}</Text>
                    </View>

                    <View style={styles.textSince}>
                        <Image 
                            source={IMAGE.CALENDAR}
                            style={styles.imageSince}
                        />
                        <Text style={styles.textGray}>Since january 2016</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textGray}><Text style={styles.textFollowCount}>12</Text> Following</Text>
                        <Text style={styles.textGray}><Text style={styles.textFollowCount}>12</Text> Followers</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

export default Perfil;