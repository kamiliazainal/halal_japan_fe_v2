import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { CATEGORY } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const Home = props => {
    const renderGridItem = (itemData) => {
        if (itemData.item.id == "c1") {
            return (
            <CategoryGridTile 
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {
            props.navigation.navigate({ routeName: 'Explore2',
            params: {
                categoryId: itemData.item.id
            }
        });
        }}
        />)
           }
           else if (itemData.item.id=="c5"){
               return (
                <CategoryGridTile 
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate({ routeName: 'AboutPage',
                    params: {
                        categoryId: itemData.item.id
                    }
                });
                }}
                />
               )
           }
           else {
        return <CategoryGridTile 
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {
        //     props.navigation.navigate({ routeName: 'ExplorePage',
        //     params: {
        //         categoryId: itemData.item.id
        //     }
        // });
        }}
        />}
    };
    return (
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORY}
        renderItem={renderGridItem}
        numColumns={2}
        />
    );
};

// HomepageScreen.navigationOptions = {
//         headerTitle: 'Halal Map',
//         headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
//             <Item 
//                 title= 'search'
//                 iconName= 'md-search'
//                 onPress={() => {
                    
//                 }}
//             />
//         </HeaderButtons>)
// };


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home;
