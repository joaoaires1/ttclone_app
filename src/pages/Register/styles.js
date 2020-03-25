import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    viewInput: { 
        marginLeft: 40, 
        marginRight: 40, 
        marginTop: 10 
    },
    labelInput: { 
        marginLeft: 2, 
        marginBottom: -10, 
        color: '#778899' 
    },
    styleInput: {
        borderColor: '#ccc', 
        borderBottomWidth: 1,
        fontSize: 18,

    },
    viewButton: { 
        flex: 1, 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end',
        margin: 15 
    },
    loginButton: {
        borderRadius: 15, 
        backgroundColor: '#107c10', 
        width: 75, height: 30, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    loginText: { 
        color: '#FFF', 
        fontWeight: 'bold' 
    },
    titleText: { 
        marginBottom: 15, 
        marginTop: 80, 
        marginLeft: 40, 
        fontSize: 26, 
        fontWeight: 'bold' 
    }

});