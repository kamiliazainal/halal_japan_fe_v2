import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import MyFood from '../screens/MyFood';
import MyFashion from '../screens/MyFashion';
import MyMedicine from '../screens/MyMedicine';
import MyMosque from '../screens/MyMosque';
import Restaurants from '../screens/Restaurants';
import Tokyo from '../prefectures/Tokyo';
import Osaka from '../prefectures/Osaka';
import Kanagawa from '../prefectures/Kanagawa';
import Kyoto from '../prefectures/Kyoto';
import RestaurantList from '../screens/RestaurantList';
import AllTokyoRestaurantDetail from '../screens/AllTokyoRestaurantDetail';
import MapPreview from '../components/MapPreview'
import RestaurantDetail from '../screens/RestaurantDetail';


const defaultStackNavOptions ={

    tabBarOptions: {
        labelStyle: {fontSize: 8,
            fontFamily: 'open-sans',
        color: 'black',},
        upperCaseLabel: false,
          style: {backgroundColor: 'white',},
            activeTintColor: Colors.primaryColor},
            swipeEnabled: false
}

const tabExplore = createStackNavigator ({
    Explore: ExploreScreen,
    Restaurant:Restaurants,
    tokyoList: Tokyo,
    map:MapPreview,
    restaurantlist:RestaurantList,
    
    
    //restaurantDetail:RestaurantDetail,
    
   
    // osakaList: Osaka,
    // kanagawaList: Kanagawa,
    // kyotoList: Kyoto,
    //alltokyorestaurantdetail: AllTokyoRestaurantDetail
},
);

const TabTop = createMaterialTopTabNavigator ({

    myfood:{screen: tabExplore,
    navigationOptions: {tabBarLabel: 'My Food'}},
    myfashion:{screen: MyFashion,
    navigationOptions: {
        tabBarLabel: 'My Fashion'
    }},
    mymedicine: {screen:MyMedicine,
    navigationOptions:{
        tabBarLabel: 'My Medicine'
    }},
    mymosque: {screen: MyMosque,
    navigationOptions: {
        tabBarLabel: 'My Mosque'
    }}
},
{defaultNavigationOptions: defaultStackNavOptions
}
);

export default createAppContainer(TabTop);