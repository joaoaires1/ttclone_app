import React, { useContext, useState } from 'react';
import { 
    StatusBar,
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { callSearchPeoples } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';
import Post from '../../components/Post';
import styles from '../Search/styles';

const Search = ({ navigation }) => {
    const { user } = useContext(UserContext);
    const [peoples,  setPeoples] = useState([]);

    const handleSearch = async (name) => {
        try {
            const response = await callSearchPeoples({ id: user.id, api_token: user.api_token, name: name });
            console.log(response);
            
            const {data} = response;
            setPeoples(data.peoples);
        } catch (error) {
            setPeoples([]);
        }
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <View style={styles.container}>
                
                <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={30} color="#107c10" />
                </TouchableOpacity>

                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Search in twitter"
                                onChangeText={text => handleSearch(text)}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                

            </View>

            <FlatList
                data={peoples}
                renderItem={({ item }) =>  <Post user={item} search={true} navigation={navigation} />}
                keyExtractor={item => `${item.username}`}
            />
            
        </>
    );
}

export default Search;