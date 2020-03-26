import React, {Component} from 'react';
import { View, Text, StyleSheet, Image,ImageBackground, ScrollView} from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { withNavigation } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { SliderBox } from 'react-native-image-slider-box';
import { Ionicons } from '@expo/vector-icons'
import { Button } from 'react-native-elements';
import Osaka from '../prefectures/Osaka';


class AllTokyoRestaurantDetail extends Component {

    constructor(props){
        super(props)
    
        this.state={
          markers:[{        
            key:"1"   
          }]
        }
    
      }

    render () {
        const {navigation} = this.props;


        let minX, maxX, minY, maxY, lat ,long ,latdelta, longdelta ;

        let points = [{latitude: JSON.parse(navigation.getParam('T_Latitude', 'default value')), 
                        longitude: JSON.parse(navigation.getParam('T_Longitude', 'default value'))}]  //format dia dlm bentuk = [{ latitude: 28.779660, longitude: 77.421110 }, ...., ....]
      
        // init first point
        minX = points[0].latitude;
        maxX = points[0].latitude;
        minY = points[0].longitude;
        maxY = points[0].longitude;
      
        // calculate rect
        points.map((point) => {
          minX = Math.min(minX, point.latitude);
          maxX = Math.max(maxX, point.latitude);
          minY = Math.min(minY, point.longitude);
          maxY = Math.max(maxY, point.longitude);
        });
      
        const midX = (minX + maxX) / 2;
        const midY = (minY + maxY) / 2;
        const deltaX = (maxX - minX)+0.01;
        const deltaY = (maxY - minY)+0.01;
      

        lat = midX
        long = midY
        latdelta= deltaX
        longdelta = deltaY

        // mythis.setState({region:{  
        //   latitude: midX,   
        //   longitude: midY,  
        //   latitudeDelta: deltaX,  
        //   longitudeDelta: deltaY,  
        // }})

        //console.log(MainImage)
        return (
            <ScrollView  style={styles.screen}>
                <ImageBackground style={styles.image1} source={{uri: navigation.getParam('T_MainImage','some default value')}}>
                    <View style={styles.screen2}>
                    <Text style={styles.text1}>{navigation.getParam('T_Name', 'default value')}</Text>
                    <Text style={styles.text5} >{navigation.getParam('T_Area', 'default value')}</Text>
                    <Text style={styles.text5}>Types: {navigation.getParam('T_Type', 'default value')}</Text>
                    <View style={styles.screen3}>
                        <Button title="Bookmark"></Button>
                        <Button title="Check in"></Button>
                        <Button title="Review"></Button>
                        <Button title="Photo"></Button>
                        {/* <Button title="Discount"></Button> */}
                    </View>
                    </View>
                </ImageBackground>
                <View style={styles.container}>
                    <Text style={styles.text6}>Info</Text>
                    <View style={styles.section}>
                    <Text style={styles.text3}>Type of Cuisines</Text>
                    <Text style={styles.text2}>{navigation.getParam('T_Cuisine', 'default value')}</Text>
                    <Text style={styles.text3}>Phone Number</Text>
                    <Text style={styles.text2}>{navigation.getParam('T_Mobile', 'default value')}</Text>
                    <Text style={styles.text3}>Address</Text>
                    <Text style={styles.text2}>{navigation.getParam('T_Address', 'default value')}</Text>
                        <MapView 
                        provider = {PROVIDER_GOOGLE}
                        style={styles.mapStyle}  
                        // showsUserLocation={false}  
                        // zoomEnabled={true}  
                        // zoomControlEnabled={false}  
                        //customMapStyle ={ RetroMapStyles }
                        region ={{
                            latitude: lat,
                            longitude: long,
                            latitudeDelta: latdelta,
                            longitudeDelta: longdelta
                        }}
                        >
                            {this.state.markers.map(marker => (
                        <Marker     
                        key={marker.key}      
                        coordinate={{
                            latitude: JSON.parse(navigation.getParam('T_Latitude', 'default value')),
                            longitude: JSON.parse(navigation.getParam('T_Longitude', 'default value'))
                        }}
                        title={navigation.getParam('T_Name', 'default value')}
                                />
                            ))}
                        </MapView>
                    </View>
                    <Text style={styles.text6}>Facilities</Text>
                    <View style={styles.section}>
                    <View style={styles.dropdown4}>
                     <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/45c1f92e-8512-45d7-858c-3b50acd334b7.halal-sign.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Halal Certified</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/c8afd89c-de05-4657-951c-543d055e9193.no-meat.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Pork Free</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/5e42075d-0fea-4782-8dbb-fb1db0492bf3.vegetables.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Vegetarian Meal</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.dropdown4}>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/bdd2c0f8-7b28-4f24-af03-c9f6b4421329.no-alcohol.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>No Alcohol in Meal</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/bdd2c0f8-7b28-4f24-af03-c9f6b4421329.no-alcohol.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>No Alcohol Drinks</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/12/852866bc-c355-441d-bedb-5b7a29efcbed.chef-hat.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Muslim Owner</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.dropdown4}>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/12/852866bc-c355-441d-bedb-5b7a29efcbed.chef-hat.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Muslim Chef</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/96883914-4055-42fa-b16e-e55dd0bd3b7d.pot.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Halal Kitchenware</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/1ba12254-3993-406a-b71b-0b4415b1208a.takbir.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Prayer Space</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.dropdown4}>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/435d4c83-f5fb-44c6-b71a-cb0816c1e9ce.wifi.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Wifi</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/35be18dc-46ed-45c8-a407-7860adcd0091.scooter.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Delivery</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/465f7134-1997-4116-a4a7-27335dd5e4e4.credit-card.png'}} />
                        <Text style={styles.text2} numberOfLines={2}>Credit Card</Text>
                        </View>
                    </View>
            </View>
                    </View>

                    <Text style={styles.text6}>About Restaurant</Text>
                    <View style={styles.section}>
                    <Text style={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>

                    <Text style={styles.text6}>Menu</Text>
                    <View style={styles.section}>
                    <SliderBox sliderBoxHeight={200}
                    parentWidth={318}
                    images={[
                         navigation.getParam('T_Menu1','some default value'),
                         navigation.getParam('T_Menu2','some default value'),
                         navigation.getParam('T_Menu3','some default value'),
                         navigation.getParam('T_Menu4','some default value')
                    ]} />
                        {/* <View style={styles.dropdown4}>
                            <View style={styles.dropdown3}>
                                <View style={styles.dropdown6}>
                                    <Image style={styles.image} source={{uri: navigation.getParam('Menus1','some default value')}}></Image>
                                    <Image style={styles.image} source={{uri: navigation.getParam('Menus2','some default value')}}></Image>
                                    <Image style={styles.image} source={{uri: navigation.getParam('Menus3','some default value')}}></Image>
                                    <Image style={styles.image} source={{uri: navigation.getParam('Menus4','some default value')}}></Image>
                                </View>
                            </View>
                        </View> */}
                    </View>

                    <Text style={styles.text6}>Review</Text>
                    <View style={styles.section}>
                    <View style={styles.section2}>
                    <Text style={styles.text3}>John Doe</Text>
                    <Text style={styles.text2} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <View style={styles.dropdown6}>
                    <Button
                        icon={<Ionicons name="md-thumbs-up" size={20} color="#be0029" />}
                        title=""
                        type= "clear"
                        />
                    <Button
                        icon={<Ionicons name="ios-heart" size={20} color="#be0029" />}
                        title=""
                        type= "clear"
                        />
                    </View>
                    </View>
                    <View style={styles.section2}>
                    <Text style={styles.text3}>John Doe</Text>
                    <Text style={styles.text2} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <View style={styles.dropdown6}>
                    <Button
                        icon={<Ionicons name="md-thumbs-up" size={20} color="#be0029" />}
                        title=""
                        type= "clear"
                        />
                    <Button
                        icon={<Ionicons name="ios-heart" size={20} color="#be0029" />}
                        title=""
                        type= "clear"
                        />
                    </View>
                    </View>
                    <Button type= "clear" title="Read More"/>
                    </View>
                    
                    <Text style={styles.text6}>You may like</Text>
                    <View style={styles.section}>
                    <Osaka />
                    </View>
                    <View style={styles.section3}>
                    <Text style={styles.text6}>Is this your restaurant ?</Text>
                    <Button title="Claim" />
                    </View>

                </View>
           </ScrollView>
        
        )
    }
}


AllTokyoRestaurantDetail.navigationOptions = (props) => {
    return {
        headerTransparent: {position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0},
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Back'
            iconName='md-arrow-back'
            onPress={() => {props.navigation.goBack()}}
        />
    </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    screen2: {
        top: 200,
        paddingLeft: 15
    },
    screen3: {
        paddingRight: 55,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'stretch'
    },
    container: {
        //marginTop: -120,
        padding: 15
    },
    image: {
        width: 100,
        height: 100,
        position: 'relative'
    },
    image1: {
        width: "100%",
        height: 300
    },
    text1: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        paddingTop: 10,
        color: 'white',
    },
    text6: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        paddingTop: 10,
    },
    text5:{
        fontFamily: 'open-sans-bold',
        fontSize: 12,
        color: 'white'
    },
    text3: {
        fontFamily: 'open-sans-bold',
        fontSize: 8
    },
    text2: {
        fontFamily: 'open-sans',
        fontSize: 8
    },
    section: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        backgroundColor: '#e3e1e1',
        paddingTop: 10,
        paddingBottom: 10
    },
    section2: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        backgroundColor: 'white',
        padding: 10
    },
    section3: {
        alignItems: 'center'
    },
    mapStyle: {
        width: '100%',
        height: 300,
      },
      dropdown3: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        paddingLeft: 5,
        width: '33.2%',
        height: '60%'
    },
    dropdown4: {
        flexDirection: 'row',
        alignContent: 'space-around'
    },
    dropdown5: {
        flexDirection: 'column',
        alignContent: 'space-around'
    },
    dropdown6: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    checkboxImg: {
        width: 25,
        height: 25
      }
})

export default withNavigation(AllTokyoRestaurantDetail);
