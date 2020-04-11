import React, { useContext, useState } from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    Image, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    Keyboard, 
    TextInput,
    Dimensions 
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserContext } from '../../contexts/UserContext';

const width = Dimensions.get('window').width - 50;

const Tweet = ({ navigation }) => {
    console.log(navigation);
    
    const { user } = useContext(UserContext);
    const [ text, setText ] = useState('');

    return(
        <View  style={styles.container}>
            <View style={styles.tweetHeader}>
                <TouchableOpacity style={{ width: 40, height: 40, justifyContent: "center" }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='window-close' size={25} color='#107c10' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.tweetBtn}>
                    <Text style={styles.tweetBtnText}>Tweet</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textContainer}>
                <Image 
                    source={{ uri: user.avatar }} 
                    style={styles.textAvatar}
                />

                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ width: width }}>
                            <TextInput
                                style={{ fontSize: 16, color: '#000' }}
                                multiline={true}
                                maxLength={140}
                                placeholder="What is happening?"
                                placeholderTextColor='#000'
                                onChangeText={text => setText(text)}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}

export default Tweet;