import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { IMAGE } from '../utils/constants';

export default function LogoTitle({ navigation }) {
    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={{ width: 25, height: 25, marginLeft: 5 }}
                        source={IMAGE.MENU}
                        resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 25, height: 25 }}
                    source={IMAGE.LOGO}
                    resizeMode="contain" />
            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    );
}