import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cover: {
        backgroundColor: 'green',
        height: 120
    },
    backButton: {
        marginTop: 15, 
        marginLeft: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
    },  
    containerStats: {
        padding: 15, 
        position: 'relative',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#657786',
        marginTop: 75
    },
    perfilImage: {
        width: 75, 
        height: 75,
        borderWidth: 4,
        borderColor: '#FFF',
        borderRadius: 50,
        position: 'absolute',
        top: -45,
        
    },
    buttonPerfil: {
        alignSelf: "flex-end",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#657786',
        borderRadius: 50,
        width: 90,
        paddingTop: 3,
        paddingBottom: 3
    },
    buttonText: {
        color: '#657786',
        fontWeight: 'bold'
    },
    textName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000'
    },
    textUsername: {
        color: '#657786'
    },
    textSince: {
        marginTop: 16,
        marginBottom: 12,
        flexDirection: 'row'
    },
    imageSince: {
        width: 18, 
        height: 18, 
        marginRight: 8
    },
    textFollowCount: {
        fontWeight: 'bold',
        color: '#000'
    },
    textGray: {
        color: '#657786',
        marginRight: 10
    }
});