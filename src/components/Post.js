import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default Post = ({ user, createdAt, text, search, navigation }) => {
    return (
        <View style={styles.row}>

            <TouchableOpacity style={styles.rowChild}
                onPress={() => navigation.navigate('Perfil', { username: user.username })}
            >
                <Image 
                    source={{ uri: user.avatar }}
                    style={styles.avatar}
                />
            </TouchableOpacity>

            <View style={styles.rowChild}>
                {
                    !search 
                    ?
                    <>
                        <Text>{user.name} <Text style={styles.usernameText}>@{user.username} - {createdAt}</Text></Text>
                        <Text>{text}</Text>
                    </> 
                    :
                    <>
                        <Text>{user.name}</Text>
                        <Text style={styles.usernameText}>@{user.username}</Text>
                    </>
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    row: {
        flexDirection: 'row',
        borderBottomColor: "#ccc",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    avatar: { 
        width: 50, 
        height: 50, 
        borderRadius: 50 
    },
    rowChild: {
        padding: 10
    },
    usernameText: {
        color: '#657786'
    }
});
