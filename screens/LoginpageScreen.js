import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LoginpageScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>LoginpageScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginpageScreen;
