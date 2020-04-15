import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { IMAGE } from '../../utils/constants';
import Icon from 'react-native-vector-icons/Feather';

export default EditPerfil = ({ navigation }) => {
    return (
        <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrow-left' size={25} color='#000' />
                </TouchableOpacity>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#fff' }}>Joao Aires</Text>
                    <Text style={{ color: '#fff' }}>9 Tweets</Text>
                </View>

            </View>
    );
}