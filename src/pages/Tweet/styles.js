import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { 
        marginHorizontal: 10 
    },
    tweetHeader: { 
        height: 50, 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between' 
    },
    tweetBtn: {
        width: 72,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#107c10',
        borderRadius: 50
    },
    tweetBtnText: { 
        color: '#FFF', 
        fontWeight: 'bold' 
    },
    textContainer: { 
        flexDirection: 'row' 
    },
    textAvatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginTop: 15
    }
});