import React from 'react';
import { View, StyleSheet, ImageBackground, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const AdspageScreen = props => {
    return (
        <View style={styles.screen}>
            <ImageBackground style={styles.welcome}
            source={require('../assets/ads1.jpg')}>
                <Ionicons style={styles.closeIcon}
                name='ios-close-circle'
                size={28}
                onPress={() =>{
                    props.navigation.navigate({routeName: 'Homepage'});
                    }}
                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        width: '100%',
        height: '100%'
      },
      closeIcon:{
          paddingLeft: '90%',
          paddingTop: '5%'
      }
})

export default AdspageScreen;
