import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const CategoryGridTile = props => {
    return (
        <View style={styles.screen}>
            <TouchableOpacity 
        style={styles.gridItem}
        onPress={props.onSelect}
        >
            <View style={styles.container}>
                    <ImageBackground 
                        source={{uri: props.imageUrl}}
                        style={styles.bgImage}
                        >
                        
                    </ImageBackground>
            </View>
           
        </TouchableOpacity>
         <View style={styles.titleContainer}>
         <Text style={styles.title} numberOfLines={1}>
             {props.title}
         </Text>
     </View>
     </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        //backgroundColor: 'blue'
    },
    gridItem: {
        //marginVertical: 10,
        //height: 150,
        overflow: 'hidden',
        elevation: 2,
        borderRadius: 400/ 2
    },
    container: {
        //borderRadius: 400/ 2,
        width: 120,
        height: 120,
        shadowColor: 'silver',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        //padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        paddingTop: '1%'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'left'
    },
    bgImage: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryGridTile;