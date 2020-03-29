import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default Post = ({ user, createdAt, text }) => {
    return (
        <View style={styles.row}>

            <View style={styles.rowChild}>
                <Image 
                    source={{ uri: user.avatar }}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.rowChild}>
                <Text>{user.name} <Text style={styles.usernameText}>@{user.username} - {createdAt}</Text></Text>
                <Text>{text}</Text>
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
