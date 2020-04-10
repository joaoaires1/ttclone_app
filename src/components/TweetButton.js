import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default TweetButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Tweet')}
            style={{ 
                position: 'absolute', 
                zIndex: 999, 
                right: 10, 
                bottom: 20,
                borderRadius: 50,
                backgroundColor: '#107c10',
                width: 55,
                height: 55,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={{ position: 'relative' }}>
                <Icon style={{ position: 'absolute', left: -12, top: -12 }} name='plus' size={14} color='#FFF' />
                <Icon style={{ position: 'absolute', left: -6, top: -9 }} name='feather' size={24} color='#FFF' />
            </View>
        </TouchableOpacity>
    );
}