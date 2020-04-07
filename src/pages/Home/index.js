import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, View, Text, TextInput, Button, TouchableOpacity, Image,FlatList } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import Post from '../../components/Post';
import { UserContext } from '../../contexts/UserContext';

const Home = ({ navigation }) => {
    const { timeline} = useContext(UserContext);
    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <CustomHeader navigation={navigation} />

            <FlatList
                data={timeline}
                renderItem={({ item }) => <Post 
                    user={item.user} 
                    createdAt={item.created_at} 
                    text={item.text} 
                    navigation={navigation} 
                />}
                keyExtractor={item => `${item.id}`}
            />
        </>
    );
}

export default Home;