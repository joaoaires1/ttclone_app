import React, { useContext, useState } from 'react';
import { 
    StatusBar,
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { callSearchPeoples } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';
import Post from '../../components/Post';

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
            <View style={{ alignItems: 'center', flexDirection: 'row', height: 50, borderBottomColor: '#ccc', borderBottomWidth: StyleSheet.hairlineWidth }}>
                
                <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={30} color="#107c10" />
                </TouchableOpacity>

                <View>
                    <TextInput
                        style={{ 
                            height: 40, 
                            borderColor: 'gray', 
                            borderWidth: 1,
                            borderRadius: 50,
                            width: 250,
                            paddingHorizontal: 20,
                            marginLeft: 30,
                            backgroundColor: 'rgb(230, 236, 240)',
                            borderColor: '#ccc',
                        }}
                        placeholder="Search in twitter"
                        onChangeText={text => handleSearch(text)}
                    />
                </View>

            </View>

            <FlatList
                data={peoples}
                renderItem={({ item }) =>  <Post user={item} search={true} />}
                keyExtractor={item => `${item.username}`}
            />
            
        </>
    );
}

export default Search;