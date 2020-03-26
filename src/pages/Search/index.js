import React, { useContext } from 'react';
import { StatusBar, Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const Search = ({ navigation }) => {

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#ccc" />
            <CustomHeader navigation={navigation} />
            <Text>Search</Text>
        </>
    );
}

export default Search;