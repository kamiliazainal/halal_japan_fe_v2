import React from 'react';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator, NavigationActions   } from 'react-navigation';
import { createMaterialTopTabNavigator,createBottomTabNavigator  } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors';
import LandingpageScreen from '../screens/LandingpageScreen';
import LandingScreen from '../screens/LandingScreen'
import LoginpageScreen from '../screens/LoginpageScreen';
//import AdspageScreen from '../screens/AdspageScreen';
import RestaurantDetail from '../screens/RestaurantDetail';
import Home from '../screens/Home';
import HomepageScreen from '../screens/HomepageScreen';
// import BottomTabNavigator from '../navigation/BottomTabNavigator';
 import TopTabNavigator from '../navigation/TopTabNavigator';
import MapPreview from '../components/MapPreview'
import ExploreScreen from '../screens/ExploreScreen';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Restaurants from '../screens/Restaurants';
import Tokyo from '../prefectures/Tokyo';
import RestaurantList from '../screens/RestaurantList';
import MyFashion from '../screens/MyFashion';
import MyMedicine from '../screens/MyMedicine';
import MyMosque from '../screens/MyMosque';
import AllTokyoRestaurantDetail from '../screens/AllTokyoRestaurantDetail';

const defaultStackNavOptions ={
    headerTitle: 'Halal Map',
    headerLeft: null,
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    

    // tabBarOptions: {
    //     labelStyle: {fontSize: 8,
    //         fontFamily: 'open-sans',
    //     color: 'black',},
    //     upperCaseLabel: false,
    //       style: {backgroundColor: 'white',},
    //         activeTintColor: Colors.primaryColor},
    //         swipeEnabled: false
}


// const backAction = NavigationActions.back({
//     key: null
//   }) 
const general = createStackNavigator({
        Top: {screen: TopTabNavigator,
        navigationOptions:{
            //header: null
        }},
        Explore: {screen: ExploreScreen,
            navigationOptions: {
               // header: null
                }},
        map: {screen: MapPreview,
            navigationOptions: {
               // header: null
                }},
        Restaurant:{screen:Restaurants,
            navigationOptions: {
               // header: null
                }},
        tokyoList: {screen: Tokyo,
            navigationOptions: {
               // header: null
                }},
        restaurantDetail: {screen: RestaurantDetail,
            navigationOptions: {
               // header: null
                }},
        restaurantlist:{screen: RestaurantList,
            navigationOptions: {
                //header: null
                }},
        alltokyorestaurantdetail: {screen: AllTokyoRestaurantDetail,
        navigationOptions: {
                //header: null
                }},
                
},

{
    initialRouteName: 'Explore',
    defaultNavigationOptions: defaultStackNavOptions
},
)


const Bottom2 = createBottomTabNavigator({
    Home1:{screen: Home,
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
    Explore2:{ screen: general,
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
    }
},
{
    defaultNavigationOptions: defaultStackNavOptions
},
)

const Bottom1 = createBottomTabNavigator({
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
    Explore1:{ screen: general,
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
    ProfilePage: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: tabInfo => {
                return (
                <Ionicons 
                name="md-person" 
                size={25} 
                color={tabInfo.tintColor}
                />);
            }
        }
    }
},
{
    defaultNavigationOptions: defaultStackNavOptions
},
)

// const top= createMaterialTopTabNavigator({
//     myfood:{screen: general,
//         navigationOptions: {tabBarLabel: 'My Food'}},
//         myfashion:{screen: MyFashion,
//         navigationOptions: {
//             tabBarLabel: 'My Fashion'
//         }},
//         mymedicine: {screen:MyMedicine,
//         navigationOptions:{
//             tabBarLabel: 'My Medicine'
//         }},
//         mymosque: {screen: MyMosque,
//         navigationOptions: {
//             tabBarLabel: 'My Mosque'
//         }}
// },
// {
//     defaultNavigationOptions: defaultStackNavOptions
// })

const MainNavigator = createSwitchNavigator(
    {
        LandingScreen:{
            screen: LandingScreen,
            navigationOptions: {
                header: null
                }
        },
        Landingpage: {
            screen: LandingpageScreen,
            navigationOptions: {
                header: null
                }
        },
        Loginpage: {
            screen: LoginpageScreen,
            navigationOptions: {
                header: null,
                tabBarVisible: false
                }
        },
        // Home: {
        //     screen: Home,
        //     navigationOptions: {
        //         //header: null,
        //         //tabBarVisible: false
        //         }
        // },
        // HomePage: {
        //     screen: HomepageScreen,
        //     navigationOptions: {
        //         //header: null,
        //         //tabBarVisible: false
        //         }
        // },
        bottom1:Bottom1,
        bottom2: Bottom2,
        //Top: top
        // Adspage: {
        //     screen: AdspageScreen,
        //     navigationOptions: {
        //         header: null,
        //         tabBarVisible: false
        //         }
        // },
        // EateryTokyo: {
        //     screen: MapEateryTokyo,
        //     navigationOptions: {
        //         header: null,
        //         tabBarVisible: false
        //         }
        // },
        // top: TopTabNavigator,
        // bottom: BottomTabNavigator,
        
       
},
// {
//     defaultNavigationOptions: defaultStackNavOptions
// },
{ 
    contentOptions: {
        activeTintColor: '#ff6f00',
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
}
);
export default createAppContainer(MainNavigator);