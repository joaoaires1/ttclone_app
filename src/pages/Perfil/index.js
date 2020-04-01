import React, { useContext, useState, useEffect } from 'react';
import { StatusBar, View, Image, TouchableOpacity, Text, FlatList, Animated } from 'react-native';
import styles from './styles';
import { IMAGE } from '../../utils/constants';
import { UserContext } from '../../contexts/UserContext';
import { callPerfilPosts } from '../../services/api';
import Post from '../../components/Post';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Perfil = ({ navigation }) => {
    const { user } = useContext(UserContext);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        construct();
    }, []);

    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

    const construct = async () => {
        const { data: postsFromServer } = await callPerfilPosts(user);
        setPosts(postsFromServer.posts);
    }

    const animatedScrollYValue = new Animated.Value(0);

    const headerHeight = animatedScrollYValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
      });

    const ListHeder = () => {
        return (
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
        )
    }
    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />

            <Animated.View 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'green',
                    // zIndex: 10,
                    height: headerHeight 
                }} 
            >
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Animated.Image 
                        source={IMAGE.BACK}
                        style={{ width: 17, height: 17 }}
                    />
                </TouchableOpacity>
            </Animated.View>

            <AnimatedFlatList
                data={posts}
                renderItem={({ item }) => <Post user={item.user} createdAt={item.created_at} text={item.text} />}
                keyExtractor={item => `${item.id}`}
                ListHeaderComponent={ListHeder()}
                onEndReached={() => console.log('qweq', headerHeight)}
                onEndReachedThreshold={0.1}
                scrollEventThrottle={16}
                onScroll={
                    Animated.event(
                        [
                          {
                            nativeEvent: { contentOffset: { y: animatedScrollYValue } },
                          },
                        ]
                      )
                }
            />
            
        </>
    );
}

export default Perfil;