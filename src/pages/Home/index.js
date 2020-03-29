import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View, Text, TextInput, Button, TouchableOpacity, Image,FlatList } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import Post from '../../components/Post';
import { UserContext } from '../../contexts/UserContext';
import { getData } from '../../utils/helpers';

const Home = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext);
    const update = '';

    const posts = [
        {
            "id": 18,
            "user_id": 3,
            "text": "q",
            "created_at": "7 day's",
            "user": {
                "name": "joao",
                "username": "joao",
                "avatar": "http://10.0.0.8:8000/img/cache/avatar/w0MjBqblKPmgg4AbgSKKNzfJ6BmzdM.jpg"
            }
        }
    ];

    useEffect(() => {

        getData().then(data => setUser(data));

    }, [update]);
    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <CustomHeader navigation={navigation} />

            <FlatList
                data={posts}
                renderItem={({ item }) => <Post user={item.user} createdAt={item.created_at} text={item.text}  />}
                keyExtractor={item => item.id}
            />
        </>
    );
}

export default Home;