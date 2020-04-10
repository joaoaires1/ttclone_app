import React, { useContext } from 'react';
import { StatusBar, FlatList } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import Post from '../../components/Post';
import { UserContext } from '../../contexts/UserContext';
import TweetBtn from '../../components/TweetButton';

const Home = ({ navigation }) => {
    const { timeline} = useContext(UserContext);
    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <CustomHeader navigation={navigation} />
            <TweetBtn navigation={navigation} />

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