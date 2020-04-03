import React, { useContext, useState, useEffect } from 'react';
import { StatusBar, View, Image, TouchableOpacity, Text, FlatList, Animated } from 'react-native';
import styles from './styles';
import { IMAGE } from '../../utils/constants';
import { UserContext } from '../../contexts/UserContext';
import { callPerfilPosts } from '../../services/api';
import Post from '../../components/Post';

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
        inputRange: [0, 60],
        outputRange: [120, 60],
        extrapolate: 'clamp',
      });

    const imageWidth = animatedScrollYValue.interpolate({
        inputRange: [0, 40],
        outputRange: [75, 55],
        extrapolate: 'clamp',
    });

    const imageTop = animatedScrollYValue.interpolate({
        inputRange: [0, 30],
        outputRange: [-45, -14],
        extrapolate: 'clamp',
    });

    const zIndexImage = animatedScrollYValue.interpolate({
        inputRange: [0, 50],
        outputRange: [-10,1],
        extrapolate: 'clamp',
    });

    const ListHeder = () => {
        return (
            <View style={styles.containerStats}>
                <View >
                    <Animated.Image 
                        source={{ uri: user.avatar }}
                        style={{
                            width: imageWidth, 
                            height: imageWidth,
                            borderWidth: 4,
                            borderColor: '#eee',
                            borderRadius: 50,
                            position: 'absolute',
                            top: imageTop
                        }}
                    />

                    <TouchableOpacity style={styles.buttonPerfil}>
                        <Text style={styles.buttonText}>Edit perfil</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 15 }}>
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
                    zIndex: zIndexImage,
                    height: headerHeight 
                }} 
            ></Animated.View>

            <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Animated.Image 
                    source={IMAGE.BACK}
                    style={{ width: 17, height: 17 }}
                />
            </TouchableOpacity>

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