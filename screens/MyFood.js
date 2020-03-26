import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MyFood = props => {
    return (
        <View style={styles.screen}>
            <Text>MyFood</Text>
        </View>
    );
};

// MyFood.navigationOptions = {
//     headerTitle: 'Halal Map',
//     headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item 
//             title= 'search'
//             iconName= 'md-search' //? means true, : means false
//             onPress={() => {
                
//             }}
//         />
//     </HeaderButtons>)
// };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MyFood;
