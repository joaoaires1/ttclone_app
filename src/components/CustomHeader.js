import React from 'react';
import { Text, View, Image } from 'react-native'

export default function LogoTitle() {
    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image style={{ width: 25, height: 25, marginLeft: 5 }}
                    source={require('../assets/menu.png')}
                    resizeMode="contain" />
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 25, height: 25 }}
                    source={require('../assets/twitter.png')}
                    resizeMode="contain" />
            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    );
}