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

const styles = StyleSheet.create({
    account: { 
        width: 50, 
        height: 50, 
        marginTop: 15 
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

const CustomDrawerContent = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.viewStats}>
            <View style={{ marginLeft: 20 }}>
                <Image
                    source={IMAGE.ACCOUNT}
                    style={styles.account}
                />
            </View>

            <View style={{ marginLeft: 20, marginTop: 8 }}>
                <Text style={{ fontWeight: 'bold' }}>Joao Aires</Text>
                <Text>@airesjoao</Text>
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
                onPress={() => props.navigation.navigate('Perfil')}
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
                onPress={() => props.navigation.navigate('Unauth')}
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