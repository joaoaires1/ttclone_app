import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Modal,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { UserContext } from '../../contexts/UserContext';
import ImagePicker from 'react-native-image-crop-picker';
import { callEditPerfil } from '../../services/api';
import { storeData } from '../../utils/helpers';

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: 250
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    options: {
        padding: 10,
        borderBottomColor: '#000',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    optionsText: {
        textAlign: 'center',
        color: 'rgb(27, 149, 224)'
    }
  });
  

export default EditPerfil = ({ navigation}) => {
    const { user, setUser } = useContext(UserContext);
    
    const [ avatar, setAvatar ] = useState(user.avatar);
    const [ name, setName ] = useState(user.name);
    const [ photo, setPhoto ] = useState(false);
    const [ modalVisible, setModalVisible ] = useState(false);

    const handleTakePhotoPress = () => {
        setModalVisible(!modalVisible);

        ImagePicker.clean().then(() => {
            console.log('removed all tmp images from tmp directory');
        }).catch(e => {
            alert(e);
        });

        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            setAvatar(image.path);
            setPhoto(true);
        });
    }

    const handleChooseLibraryPress = () => {
        setModalVisible(!modalVisible);

        ImagePicker.clean().then(() => {
            console.log('removed all tmp images from tmp directory');
        }).catch(e => {
            alert(e);
        });

        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            setAvatar(image.path);
            setPhoto(true);
        });
    }

    const handleSavePress = async () => {
        const formData = new FormData();

        if (photo)
            formData.append('photo', {
                uri: avatar,
                type: 'image/jpeg',
                name: 'profile-picture'
            });

        formData.append('id', user.id);
        formData.append('api_token', user.api_token);
        formData.append('name', name);

        const { data: response } = await callEditPerfil(formData);
        var newUser = user;
        newUser.name = response.name;
        newUser.avatar = response.avatar;
        
        await setUser(newUser);
        await storeData(newUser);
    }
        
    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <View style={styles.options}>
                            <Text style={{ ...styles.optionsText, color: '#000' }}>Select a Photo</Text>
                        </View>

                        <TouchableHighlight
                            onPress={() => handleTakePhotoPress()}
                            style={styles.options}
                        >
                            <Text style={styles.optionsText}>Take Photo...</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => handleChooseLibraryPress()}
                            style={styles.options}
                        >
                            <Text style={styles.optionsText}>Choose from Library...</Text>
                        </TouchableHighlight>

                    </View>

                    <View style={{ ...styles.modalView, marginTop: 10 }}>
                        <TouchableHighlight
                            onPress={() => setModalVisible(!modalVisible)}
                            style={styles.options}
                        >
                            <Text style={{...styles.optionsText, fontWeight: 'bold'}}>Cancelar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

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
                    <TouchableOpacity 
                        style={{ 
                            height: 30,
                            flexDirection: 'row', 
                            alignItems: 'center'
                        }}
                        onPress={() => handleSavePress()}
                    >
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
                    <TouchableOpacity 
                        style={{
                            borderRadius: 50,
                            borderColor: '#eee',
                            borderWidth: 4,
                            position: 'absolute',
                            top: -35,
                            left: 15
                        }}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Icon 
                            name='camera' 
                            size={25} 
                            color='#fff' 
                            style={{
                                position: 'absolute',
                                zIndex: 1,
                                right: 28,
                                top: 25
                            }}
                        />

                        <Image
                            source={{ uri: avatar }}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 50,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    paddingHorizontal: 15
                }}>
                    <Text style={{ color: '#657786' }}>Name</Text>
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)} 
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