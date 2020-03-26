import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MyMedicine = props => {
    return (
        <View style={styles.screen}>
            <Text>MyMedicine</Text>
        </View>
    );
};

// MyMedicine.navigationOptions = {
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

export default MyMedicine;
