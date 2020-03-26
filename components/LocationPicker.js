import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Button,
  FlatList
} from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

import Loader from './Loader';
import Colors from '../constants/Colors';
  

class LocationPicker extends Component {
  constructor(){
    super()
  this.state = {
    location: [],
    errorMessage: '',
    lat:'',
    lng: '',
    data: [],
    keys: '',
    titles: '',
    latitudes: '',
    longitudes: '',
    desc: '',
    address: '',
    types: '',
    loading: true,
  };
}

  componentWillMount(){
      this.getLocation();
      //this.fetchData();
  }

  getLocation = async () => {
    const {status} = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted'){
        this.setState({
          errorMessage: 'PERMISSION NOT GRANTED'
      })
    }

    const location = await Location.getCurrentPositionAsync();
    axios.get(`https://apis.soleet.my/halalsrv/near?lat=${location.coords.latitude}&long=${location.coords.longitude}&m=5000`)
    .then(res => {
            
      const data = res.data;
      const address = data.map(x=> x.address)
      const distance = data.map(x=> x.st_distance)
      const titles = data.map(x=> x.namerestaurant)
      const area = data.map(x=> x.area)
      const desc = data.map(x=> x.cuisine)
      const type = data.map(x=> x.type)
    
    this.setState({
      data,
      location,
      lat: location.coords.latitude, 
      lng: location.coords.longitude,
      address,
      distance,
      titles,
      area,
      desc,
      type,
      loading: false})
      console.log('1', location)
      console.log('2', data)

    })

    .catch(error => {
      this.setState({ 
        loading: false
      });
      console.log(error)
    })   
    //return 3131
}

// fetchData = async () => {
//            const lati = this.state.lat
//           const longi = this.state.lng

//           console.log('2 ', lati)

          
          
//                   // const address = data.map(x=> x.address)
//                   // const keys = data.map(x=> x.key)
//                   // const titles = data.map(x=> x.namerestaurant)
//                   // const latitudes = data.map(x=> x.latitude)
//                   // const longitudes = data.map(x=> x.longitude)
//                   // const desc = data.map(x=> x.cuisine)
                  
//                   this.setState({ 
                   
//                     // address,
//                     // keys,
//                     // titles,
//                     // latitudes,
//                     // longitudes,
//                     // desc,
//                     loading: false });

//                     // console.log('3',JSON.stringify(data).replace(']').replace('['))
//                     // console.log('3', address)
                    
              
                
// }
  

//   findCoordinates = () => {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const location = JSON.stringify(position);
//         console.log(location)
//         this.setState({ location });
//       },
//       error => Alert.alert(error.message),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   };
  //latlong = getLocation(this);
  
  render() {
    // console.log('4', this.state.keys)
    //const {navigate} = this.props.navigation; 

    // const LAT = JSON.stringify(this.state.latitudes).replace(']','').replace('[','')
    // const LNG = JSON.stringify(this.state.longitudes).replace(']','').replace('[','')
    if (this.state.loading) {
      return <Loader loading={this.state.loading} />
    } 
    
    else {
    const LAT = parseFloat(this.state.lat)
    const LNG = parseFloat(this.state.lng)
    console.log('4', LAT)
    console.log('5', LNG)
     var rawArr = this.state.data
     console.log('6', this.state.data)
    var mymarkers = []

    rawArr.forEach(x => {
  
      mymarkers.push({
        key: x.key,
        title: x.namerestaurant,
        latlng:{latitude: parseFloat(x.latitude), longitude: parseFloat(x.longitude)},
        description: x.cuisine
      })
      
    }); 

    mymarkers.push({
        key: '9999',
        title: 'you are here',
        latlng:{latitude: LAT, longitude: LNG},
        description: 'you are here'
      })
      console.log ('7', mymarkers)
    

      if (LAT == NaN){
        return(
          <View style={styles.section1}>
          <Text style={styles.H1}>Error 502 ! Please pull to refresh.</Text>
        </View>
        )
      }
      else{
    return (
      <View style={styles.container}
    //    onPress={() => this.props.navigation.navigate('map',{
    //     lati: LAT,
    //     long: LNG
    // })}
     >
        {/* <Text style={styles.welcome}>Want to search by your current location ?</Text>
        <Text style={styles.instructions}>Click here</Text> */}
  {/* <Text style={styles.instructions}>{this.state.lng}</Text>
  <Text style={styles.instructions}>{this.state.lat}</Text>
  <Text style={styles.instructions}>{this.state.data}</Text> */}
 


<MapView 
                        provider = {PROVIDER_GOOGLE}
                        style={styles.mapStyle}  
                        //gestureHandling= 'cooperative'
                        region ={{
                            latitude: parseFloat(this.state.lat),
                            longitude: parseFloat(this.state.lng),
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005
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
                          
    {/* <View style={styles.line}/>
    <View style={styles.section1}>
    <Text style={styles.H1}>Type: {this.state.types}</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.section2}>
  <Text style={styles.H3}>Name of restaurant: {this.state.titles}</Text>
  <Text style={styles.H5}>Address: {this.state.address}</Text>
  <Text style={styles.H5}>Area: {this.state.area}</Text>
  <Text style={styles.H5}>Cuisine: {this.state.desc}</Text>
  <Text style={styles.H5}>Distance from your location: {this.state.st_distance}</Text>
  </View> */}

<FlatList
data={this.state.data}
keyExtractor={(item, index) => item.key}
renderItem={({ item }) =>
<View>
    <View style={styles.line}/>
    <View style={styles.section1}>
    <Text style={styles.H1}>Type: {item.type}</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.section2}>
    <Text style={styles.H3}>Name of restaurant: {item.namerestaurant}</Text>
    <Text style={styles.H5}>Address: {item.address}</Text>
    <Text style={styles.H5}>Area: {item.area}</Text>
    <Text style={styles.H5}>Cuisine: {item.cuisine}</Text>
    <Text style={styles.H5}>Distance from your location: {item.st_distance}</Text>
    </View>
    
</View>
}
  /> 
 
      </View>
    );}
                              }
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    welcome: {
      fontSize: 15,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      //color: "#333333",
      color: 'blue',
      marginBottom: 5,
    },
    mapStyle: {
        width: '100%',
        height: 200,
      },
      section1: {
        flex: 1,
        height: '100%',
        padding: '5%',
        backgroundColor: '#d3d3d3'
    },
    section2:{
        flex: 1,
        height: '100%',
        padding: '5%'
    },
    H1:{
      fontFamily: 'open-sans-bold',
      fontSize: 15,
      textAlign: 'left'
  },
  H3: {
    fontFamily: 'open-sans-bold',
    fontSize: 12,
    textAlign: 'left'
  },
  H5:{
      fontFamily: 'open-sans',
      fontSize: 8,
      textAlign: 'left'
  },
  line: {
    width:'100%',
    flex: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    borderTopWidth:4,
    borderColor: Colors.primaryColor,
  }
  });

  export default withNavigation(LocationPicker)



// import React, {useState} from 'react';
// import { View, Button, Text, ActivityIndicator, Alert, StyleSheet} from 'react-native';
// import Colors from '../constants/Colors';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';

// const LocationPicker = props => {
//     const [isFetching, setIsFetching] = useState(false);
//     const [pickedLocation, setPickedLocation] = useState();
//     const verifyPermissions = async () => {
//         const result = await Permissions.askAsync(Permissions.LOCATION);
//         if (result.status != 'granted'){
//             Alert.alert(
//                 'Insufficient permissions !',
//                 'You need to grant location permissions to use this app.',
//                 [{text: 'Okay'}]
//             );
//             return false;
//         }
//         return true;
//     };
//     const getLocationHandler = async () => {
//         const hasPermission = await verifyPermissions();
//         if (!hasPermission){
//             return;
//         }
//         try
//         {
//             setIsFetching(true)
//             const location = await Location.getCurrentPositionAsync({timeout: 5000});
//             //console.log(location);
//             setPickedLocation({
//                 lat: location.coords.latitude,
//                 lng: location.coords.longitude
//             });
//     }
//         catch(err){
//             Alert.alert(
//                 'Could not fetch location !',
//                 'Please try again or select location from the list.',
//                 [{text: 'Okay'}]
//             );
//         }
//         setIsFetching(false)
//     };
//     return (
//         <View style={styles.locationPicker}>
//             <View style={styles.mapPreview}>
//                 {isFetching ? (
//                     <ActivityIndicator size='large' color={Colors.primaryColor} />
//                 ): (
//                     <Text>{location}</Text>
//                 )}
                
//             </View>
//             <Button title="Get Location" color={Colors.primaryColor} onPress={getLocationHandler} />
//         </View>
//     )
// };

// const styles = StyleSheet.create({
//     locationPicker:{
//         marginBottom:15
//     },
//     mapPreview:{
//         marginBottom: 10,
//         width:'100%',
//         height: 150,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });

// export default LocationPicker;