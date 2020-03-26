import React , { Component }from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity, CheckBox} from 'react-native';
// import { HeaderButtons,Item } from 'react-navigation-header-buttons';
// import HeaderButton from '../components/HeaderButton';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import axios from 'axios';


import { Dropdown } from 'react-native-material-dropdown';

import Tokyo from '../prefectures/Tokyo';
import Osaka from '../prefectures/Osaka';
import Kanagawa from '../prefectures/Kanagawa';
import Kyoto from '../prefectures/Kyoto';


class Restaurant extends Component {

    constructor() {
        super();
        this.state = {
            certified: false,
            pork: false,
            vegetarian: false,
            alcoholMeal: false,
            alcoholDrink: false,
            owner: false,
            chef: false,
            kitchenware: false,
            prayer: false,
            wifi: false,
            delivery: false,
            credit:false,

            city: null,
            type: null,
            cuisine: null,

            data: []
        };
     }

     componentWillMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        axios.get(`https://apis.soleet.my/halalsrv/search?type=eatery,fff&area=Tokyo`)
        .then(res => {
            
          const data = res.data;
          this.setState({ data });
    
        })
        .catch(error => console.log(error));
      };

     render() {
        let cityData = [
        {value: 'Tokyo'}, 
        {value: 'Osaka'},
        {value: 'Kanagawa'},
        {value: 'Aichi'},
        {value: 'Kyoto'},
        { value: 'Fukuoka'}
    ];
        let typeData = [
        {value: 'Shop'}, 
        {value: 'Eatery'}, 
        {value: 'Vending Machine'}
        ];
    

const {navigate} = this.props.navigation; 

var LatLongArr= this.state.data

var mymarkers = []

LatLongArr.forEach(x => {

  mymarkers.push({
    key: x.key,
    title: x.namerestaurant,
    latlng:{latitude: parseFloat(x.latitude), longitude: parseFloat(x.longitude)},
    description: x.cuisine
  })
  
});   
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.title}>Restaurant & Stall</Text>
            <View style={styles.dropdown}>
                <View style={styles.dropdown2}>
                    <Dropdown
                         label='City'
                         data={cityData}
                         onChangeText={(value)=> this.setState({city:value}) }
                         fontSize={18}
                    />
                </View>
                <View style={styles.dropdown2}>
                        <Dropdown
                           label='Type'
                           data={typeData}
                           onChangeText={(value)=> this.setState({type:value}) }
                           fontSize={18}
                        />
                </View>
            </View>
            {/* <Dropdown
                label='Conditions'
                data={conditions}
                fontSize={20}
            /> */}
            <View style={styles.dropdown4}>
                     <View style={styles.dropdown3}>
                        <CheckBox  title='Halal Certified' value={this.state.certified} onValueChange={() => this.setState({ certified: !this.state.certified })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/45c1f92e-8512-45d7-858c-3b50acd334b7.halal-sign.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Halal Certified</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Pork Free' value={this.state.pork} onValueChange={() => this.setState({ pork: !this.state.pork })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/c8afd89c-de05-4657-951c-543d055e9193.no-meat.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Pork Free</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Vegetarian Meal' value={this.state.vegetarian} onValueChange={() => this.setState({ vegetarian: !this.state.vegetarian })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/5e42075d-0fea-4782-8dbb-fb1db0492bf3.vegetables.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Vegetarian Meal</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.dropdown4}>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='No Alcohol in Meal' value={this.state.alcoholMeal} onValueChange={() => this.setState({ alcoholMeal: !this.state.alcoholMeal })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/bdd2c0f8-7b28-4f24-af03-c9f6b4421329.no-alcohol.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>No Alcohol in Meal</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='No Alcohol Drinks' value={this.state.alcoholDrink} onValueChange={() => this.setState({ alcoholDrink: !this.state.alcoholDrink })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/bdd2c0f8-7b28-4f24-af03-c9f6b4421329.no-alcohol.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>No Alcohol Drinks</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Muslim Owner' value={this.state.owner} onValueChange={() => this.setState({ owner: !this.state.owner })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/12/852866bc-c355-441d-bedb-5b7a29efcbed.chef-hat.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Muslim Owner</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.dropdown4}>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Muslim Chef' value={this.state.chef} onValueChange={() => this.setState({ chef: !this.state.chef })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/12/852866bc-c355-441d-bedb-5b7a29efcbed.chef-hat.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Muslim Chef</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Halal Kitchenware' value={this.state.kitchenware} onValueChange={() => this.setState({ kitchenware: !this.state.kitchenware })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/96883914-4055-42fa-b16e-e55dd0bd3b7d.pot.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Halal Kitchenware</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Prayer Space' value={this.state.prayer} onValueChange={() => this.setState({ prayer: !this.state.prayer })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/1ba12254-3993-406a-b71b-0b4415b1208a.takbir.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Prayer Space</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.dropdown4}>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Wifi' value={this.state.wifi} onValueChange={() => this.setState({ wifi: !this.state.wifi })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/435d4c83-f5fb-44c6-b71a-cb0816c1e9ce.wifi.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Wifi</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Delivery' value={this.state.delivery} onValueChange={() => this.setState({ delivery: !this.state.delivery })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/35be18dc-46ed-45c8-a407-7860adcd0091.scooter.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Delivery</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Credit Card' value={this.state.credit} onValueChange={() => this.setState({ credit: !this.state.credit })}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/465f7134-1997-4116-a4a7-27335dd5e4e4.credit-card.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Credit Card</Text>
                        </View>
                    </View>
            </View>
            
            <View style={styles.search}>
            <Button
                    title="Search" 
                    // onPress={() =>navigate({routeName: 'HomePage'})}
                    onPress={() => {this.props.navigation.navigate({routeName:'restaurantlist', params: {
                    Cities: this.state.city,
                    Type: this.state.type,
                    // Cuisine: this.state.cuisine,
                    Latitudes: JSON.stringify(this.state.data.map(x=> parseFloat(x.latitude))).replace(']','').replace('[',''),
                    Longitudes: JSON.stringify(this.state.data.map(x=> parseFloat(x.longitude))).replace(']','').replace('[',''),
                    RestaurantName: this.state.data.map(x=> x.namerestaurant),
                    arr: this.state.data

                    }})} } 
                     //onPress={() => { console.log( JSON.stringify(this.state.data.map(x=> parseFloat(x.latitude))).replace(']','').replace('[','') )  } }
                    />
            </View>
            <Text style={styles.title}>Explore the Halal Hub</Text>
            <View style={styles.screen2}>
                {/* <Image style={styles.bgImage}
                source={{uri: 'https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C43.0528381,141.3542118&markers=color:red%7C43.0528689,141.3541899&markers=color:red%7C43.0495141,141.3570519&markers=color:red%7C43.0573956,141.3521618&markers=color:red%7C43.05197,141.35464&key=AIzaSyCbAtQ2yeosVf_2P3iirM-DkSHPZWWd4ks'}}/> */}
                         <MapView 
                        provider = {PROVIDER_GOOGLE}
                        style={styles.mapStyle}  
                        region ={{
                            latitude: 35.6762,   
                            longitude: 139.6503,  
                            latitudeDelta: 0.5,  
                            longitudeDelta: 0.5, 
                        }}
                        >
                      {mymarkers.map(marker => (
                                <Marker     
                                    key={marker.key}       
                                    coordinate={marker.latlng}
                                    title={marker.title}
                                    description={marker.description}
                                />
                                ))}
                        </MapView>
            </View>
            <View style={styles.screen2}>
            <View style={styles.section}>
                <Text style={styles.miniTitle} >Tokyo</Text> 
                {/* onPress={() =>navigate({routeName: 'myfood'})} */}
                <View style={styles.buttonContainer}>
                    <Tokyo />
                    {/* <View >
                        <TouchableOpacity 
                        onPress={() =>{
                            }}>
                            <Image source={{uri: 'https://i.ytimg.com/vi/y3ssOkW4l9E/maxresdefault.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1} >Grocery Store</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://resources.matcha-jp.com/resize/720x2000/2017/04/25-25194.jpeg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1}>Convenience Store</Text>
                            </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://resources.realestate.co.jp/wp-content/uploads/2018/05/Jupiter-Supermarket-Osaka-Real-Estate-Japan-1020x500.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text}>Supermarket</Text>
                            </TouchableOpacity>
                    </View> */}
                </View>

            </View>
            <View style={styles.section}>
                <Text style={styles.miniTitle}>Osaka</Text>

                <View style={styles.buttonContainer}>
                    <Osaka />
                    {/* <View >
                        <TouchableOpacity onPress={() =>navigate({routeName: 'Restaurant'})}>
                            <Image source={{uri: 'https://img.theculturetrip.com/768x432/wp-content/uploads/2018/09/ep7a4t-1.jpg'}}
                            style={styles.image}/>
                            <Text style={styles.text} numberOfLines={1} >Restaurant & Stall</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://noramennolife.files.wordpress.com/2013/07/img_7191.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1}>Food Truck</Text>
                            </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'http://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/026/270/medium/pixta_20024459_S.jpg?2017'}}
                            style={styles.image} />
                            <Text style={styles.text}>Fine Dining</Text>
                            </TouchableOpacity>
                    </View> */}
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.miniTitle}>Kanagawa</Text>

                <View style={styles.buttonContainer}>
                    <Kanagawa />
                    {/* <View >
                        <TouchableOpacity 
                        onPress={() =>{
                            }}>
                            <Image source={{uri: 'http://japanology.org/wp-content/uploads/2016/10/shutterstock_395513902.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1} >Drinks</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://muza-chan.net/aj/poze-weblog7/24-hour-hot-menu-vending-machine.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1}>Frozen Food</Text>
                            </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://i.pinimg.com/originals/ca/c8/19/cac8196efe39146d5fa01673578366f1.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text}>Fruit</Text>
                            </TouchableOpacity>
                    </View> */}
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.miniTitle}>Kyoto</Text>

                <View style={styles.buttonContainer}>
                    <Kyoto />
                    {/* <View >
                        <TouchableOpacity 
                        onPress={() =>{
                            }}>
                            <Image source={{uri: 'http://japanology.org/wp-content/uploads/2016/10/shutterstock_395513902.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1} >Drinks</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://muza-chan.net/aj/poze-weblog7/24-hour-hot-menu-vending-machine.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1}>Frozen Food</Text>
                            </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://i.pinimg.com/originals/ca/c8/19/cac8196efe39146d5fa01673578366f1.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text}>Fruit</Text>
                            </TouchableOpacity>
                    </View> */}
                </View>
            </View>
            </View>
        </ScrollView>
    );
}}

// Restaurant.navigationOptions = {
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
        padding: 10
    },
    dropdown: {
        flexDirection: 'row',
        alignContent: 'space-around'
    },
    dropdown3: {
        //padding: 20,
        flexDirection: 'row',
        alignContent: 'flex-start',
        //borderWidth: 1,
        paddingVertical: 10,
        //backgroundColor: 'grey',
        width: '33.2%',
        height: '85%'
    },
    dropdown4: {
        flexDirection: 'row',
        alignContent: 'space-around'
    },
    dropdown5: {
        flexDirection: 'column',
        alignContent: 'space-around'
    },
    dropdown2: {
        flex: 1,
       paddingHorizontal: 20
    },
    search: {
        alignSelf: 'center',
        width: '30%',
        paddingVertical: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'left',
        paddingVertical: 10
    },
    section: {
        //borderWidth: 1,
        paddingVertical: 10,
        backgroundColor: '#f7f9fa'
    },
    miniTitle: {
        fontFamily: 'open-sans',
        fontWeight: '600',
        fontSize: 20
    },
    bgImage: {
        width: "100%",
        height: 150,
    },
    screen2: {
        paddingVertical: 10
    },
    image: {
        width: 110,
        height: 110
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      button: {
        width: '38%'
      },
      text: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 12
      },
      checkbox: {
          width: 50,
          height: 50
      },
      checkboxImg: {
        width: 40,
        height: 40
      },
      text1: {
          fontFamily: 'open-sans',
          fontSize: 8
      },
      mapStyle: {
        width: '100%',
        height: 200,
      }
})

export default Restaurant;
