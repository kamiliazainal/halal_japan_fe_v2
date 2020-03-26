import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Button, TouchableOpacity, ActivityIndicator} from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import axios from 'axios';
import { SliderBox } from 'react-native-image-slider-box';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Colors from '../constants/Colors';


class RestaurantList extends Component {
    constructor(){
        super()
      this.state = {
        data: [],
        markers:[{        
            key:"1"   
          }]
      };}
    
      componentWillMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        axios.get(`https://apis.soleet.my/halalsrv/search?type=eatery,fff&area=Tokyo`)
        .then(res => {
            
          const data = res.data;
          //console.log(data.map(x=> x.latitude))
          
          this.setState({ data });
    
        })
        .catch(error => console.log(error));
      };

       

    render() {
        const  {navigation}  = this.props;
   
    navigation.getParam('Cities', 'defautlt ')
    navigation.getParam('Type', 'defautlt ')
    navigation.getParam('Cuisine', 'defautlt ')
        
    if (navigation.getParam('Cities')=='Tokyo'){

        var rawArr = navigation.getParam('arr', 'default value')

        var mymarkers = []

        rawArr.forEach(x => {
      
          mymarkers.push({
            key: x.key,
            title: x.namerestaurant,
            latlng:{latitude: parseFloat(x.latitude), longitude: parseFloat(x.longitude)},
            description: x.cuisine
          })
          
        });       
            if (navigation.getParam('Type')=='Shop'){
                return(
                    <View>
                        <Text>This is Shopping section. Coming Soon !</Text>
                    </View>
                )
            }
            else if (navigation.getParam('Type')== 'Vending Machine'){
                return(
                    <View>
                        <Text>This is Vending Machine section. Coming Soon !</Text>
                    </View>
                )
            }

            else if (navigation.getParam('Type')=='Eatery'){

          return (
            <ScrollView>
                <View style={styles.section3}>
                <Text style={styles.title2}>List of restaurants</Text>
                </View>
                <View style={styles.section3}>
                <MapView 
                        provider = {PROVIDER_GOOGLE}
                        style={styles.mapStyle}  
                        region ={{
                            latitude: parseFloat(navigation.getParam('Latitudes', 'default value').split(',')[0]),
                            longitude: parseFloat(navigation.getParam('Longitudes', 'default value').split(',')[0]),
                            latitudeDelta: 0.5,
                            longitudeDelta: 0.5
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
                
            <FlatList
            data={this.state.data}
            onEndReached={this.fetchData}
            initialNumToRender={8}
            maxToRenderPerBatch={2}
            onEndReachedThreshold={0.5}
            keyExtractor={(item, index) => item.key}
            renderItem={({ item }) =>
                <View style={styles.section1}>
                    <View style={styles.border}>
                     <Text style={styles.title}>{item.namerestaurant}</Text>
                     </View>
                    <View style={styles.section2}>
                   
                        <SliderBox sliderBoxHeight={200}
                        parentWidth={345}
                            images={[
                                item.urlrestaurant ,
                                item.menu1,
                                item.menu2,
                                item.menu3,
                                item.menu4
                            ]} />
                    </View>
                    <View style={styles.section3}>
                        <Text style={styles.resname} numberOfLines={2} ellipsizeMode="middle">Address: {item.address}</Text>
                        <Text style={styles.resname}>Cuisine: {item.cuisine}</Text>
                        <Text style={styles.resname}>Condition: {item.eatingcondition}</Text>
                        <Text style={styles.resname}>Facilities: {item.facilities}</Text>
                        <Text style={styles.resname}>Payment: {item.payment}</Text>
                        <Text style={styles.resname}>Phone Number: {item.phone_number}</Text>
                        <TouchableOpacity>
                        <Button style={width='100%'}  title="See More" onPress={() => this.props.navigation.navigate({routeName: 'alltokyorestaurantdetail', params: {
                            T_Id: item.id, 
                            T_Name: item.namerestaurant, 
                            T_Address: item.address, 
                            T_Area: item.area, 
                            T_Mobile: item.phone_number, 
                            T_Type: item.type, 
                            T_Cuisine: item.cuisine, 
                            T_MainImage: item.urlrestaurant, 
                            T_Menu1: item.menu1, 
                            T_Menu2: item.menu2,
                            T_Menu3: item.menu3, 
                            T_Menu4: item.menu4,
                            T_Longitude: item.longitude,
                            T_Latitude: item.latitude
                        }})} />
                        </TouchableOpacity>
                    </View>
                </View>   
        }
            />
             <ActivityIndicator size='large' color={Colors.primaryColor} style={justifyContent='center', alignItems='center'}/>
            
            
        </ScrollView>
        )}
    }

    else if (navigation.getParam('Cities')=='Osaka'){
        return (
            <View style={styles.screen}>
            <Text>{navigation.getParam('Cities', 'default value')}</Text>
            
        </View>
        )
    }
    else if (navigation.getParam('Cities')=='Kanagawa'){
        return (
            <View style={styles.screen}>
            <Text>{navigation.getParam('Cities', 'default value')}</Text>
            
        </View>
        )
    }
    else if (navigation.getParam('Cities')=='Aichi'){
        return (
            <View style={styles.screen}>
            <Text>{navigation.getParam('Cities', 'default value')}</Text>
            
        </View>
        )
    }
    else if (navigation.getParam('Cities')=='Kyoto'){
        return (
            <View style={styles.screen}>
            <Text>{navigation.getParam('Cities', 'default value')}</Text>
            
        </View>
        )
    }
    else if (navigation.getParam('Cities')=='Fukuoka'){
        return (
            <View style={styles.screen}>
            <Text>{navigation.getParam('Cities', 'default value')}</Text>
            
        </View>
        )
    }
    else {
        return(
            <View style={styles.screen}>
            <Text>No Data</Text>
        </View>
        )
    }

    // return (
    //     <View style={styles.screen}>
    //         <Text>{navigation.getParam('Cities', 'default value')}</Text>
    //     </View>
    // );
}
};

// RestaurantList.navigationOptions = {
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
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        paddingHorizontal:'2%',
    },
    title2: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        backgroundColor: '#f7f7f7',
        padding: 10
    },
      resname: {
          fontFamily: 'open-sans',
          fontSize: 12,
      },
      section1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        height: '100%'
        
      },
      section2:{
        flex: 1,
        height: '100%',
        paddingHorizontal: '2%',
        paddingTop: '2%',
        paddingBottom: '2%'
        
      },
      section3:{
        flex: 1,
        height: '100%',
        paddingHorizontal:'3%',
        paddingBottom:'5%',
        paddingTop: '2%',
    },
    mapStyle: {
        width: '100%',
        height: 250,
      },
      border: {
          width:'100%',
          flex: 1,
         
        borderStyle: 'solid',
        borderRadius: 4,
        borderTopWidth:4,
        borderColor: Colors.primaryColor,
      }
})

export default RestaurantList;
