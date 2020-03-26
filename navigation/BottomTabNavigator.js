import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors';
import { createBottomTabNavigator, createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import HomepageScreen from '../screens/HomepageScreen';
import ExploreScreen from '../screens/ExploreScreen';
import AboutScreen from '../screens/AboutScreen';
import Restaurants from '../screens/Restaurants';
import Tokyo from '../prefectures/Tokyo';
import Osaka from '../prefectures/Osaka';
import Kanagawa from '../prefectures/Kanagawa';
import Kyoto from '../prefectures/Kyoto';
import RestaurantList from '../screens/RestaurantList';
import TopTabNavigator from '../navigation/TopTabNavigator';
import AllTokyoRestaurantDetail from '../screens/AllTokyoRestaurantDetail';

const topp = createMaterialTopTabNavigator ({
    Top: {screen:TopTabNavigator,
        navigationOptions:{
            tabBarVisible: false
        },
        swipeEnabled: false}
})

const tabExplore = createSwitchNavigator ({
        top:topp,
        Explore: ExploreScreen,
        Restaurant:Restaurants,
        restaurantlist:RestaurantList,
        tokyoList: Tokyo,
        osakaList: Osaka,
        kanagawaList: Kanagawa,
        kyotoList: Kyoto,
        alltokyorestaurantdetail: AllTokyoRestaurantDetail  
});

const BottomTab = createBottomTabNavigator({
    HomePage:{screen: HomepageScreen,
                navigationOptions: {
                    tabBarLabel: 'Home',
                    tabBarIcon: tabInfo => {
                        return (
                        <Ionicons 
                        name="ios-home" 
                        size={25} 
                        color={tabInfo.tintColor}
                        />);
                    }
                }
                
    },
    Explore:{ screen: tabExplore,
                navigationOptions: {
                tabBarLabel: 'Explore',
                tabBarIcon: tabInfo => {
                    return (
                    <Ionicons 
                    name="ios-search"
                    size={25} 
                    color={tabInfo.tintColor}
                    />);}}
                     },
    AboutPage: {
        screen: AboutScreen,
        navigationOptions: {
            tabBarLabel: 'About Us',
            tabBarIcon: tabInfo => {
                return (
                <Ionicons 
                name="md-contact" 
                size={25} 
                color={tabInfo.tintColor}
                />);
            }
        }
    },

},
{
    
    tabBarOptions: {
    activeTintColor: Colors.primaryColor
}
});


export default createAppContainer(BottomTab);