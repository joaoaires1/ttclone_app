import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text, 
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { IMAGE } from '../utils/constants';
import { storeData } from '../utils/helpers';

const styles = StyleSheet.create({
    account: { 
        width: 50, 
        height: 50, 
        marginTop: 15,
        borderRadius: 50 
    },
    viewStats: { 
        borderBottomWidth: 1, 
        borderBottomColor: '#eee' 
    },
    icons: {
        width: 20, 
        height: 20, 
        marginRight: 8
    }
});

const CustomDrawerContent = ({ navigation, UserContext }) => {
    const { name, username, avatar } = UserContext;
    const profileImage = avatar ? { uri: avatar } : IMAGE.ACCOUNT;

    const handleSignOutPress = () => {
        storeData({});
        navigation.closeDrawer();
        navigation.navigate('Unauth');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.viewStats}>
            <View style={{ marginLeft: 20 }}>
                <Image
                    source={profileImage}
                    style={styles.account}
                />
            </View>

            <View style={{ marginLeft: 20, marginTop: 8 }}>
                <Text style={{ fontWeight: 'bold' }}>{ name }</Text>
                <Text>@{ username }</Text>
            </View>

            <View style={{ marginLeft: 20, marginTop: 8, marginBottom: 8, flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>12</Text>
                <Text style={{ marginLeft: 5 }}>Following</Text>
                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>20</Text>
                <Text style={{ marginLeft: 5 }}>Followers</Text>
            </View>

        </View>

        <ScrollView>

            <TouchableOpacity
                style={{ marginBottom: 15, marginTop: 15, marginLeft: 20 }}
                onPress={() => navigation.navigate('Perfil', { username })}
            >
            <View style={{ flexDirection: 'row' }}>
                <Image 
                source={IMAGE.PERFIL_BLACK}
                style={styles.icons}
                />
                <Text>Perfil</Text>
            </View>
            </TouchableOpacity>

        </ScrollView>

        <View style={{ borderTopColor: '#eee', borderTopWidth: 1 }}>
            <TouchableOpacity
                style={{ marginBottom: 15, marginTop: 15, marginLeft: 20, justifyContent: 'center' }}
                onPress={handleSignOutPress}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Image 
                    source={IMAGE.SIGN_OUT}
                    style={styles.icons}
                    />
                    <Text>Sign out</Text>
                </View>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

export default CustomDrawerContent;