import React , { Component }from 'react';
import {StyleSheet, View, Image, Text, FlatList, ScrollView} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import Colors from '../constants/Colors';



class MapPreview extends Component {
   

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
        const  {navigation}  = this.props;
        const Lat= navigation.getParam('lati', 'defautlt ')
        const Long= navigation.getParam('long', 'defautlt ')
        axios.get(`https://apis.soleet.my/halalsrv/near?lat=${Lat}&long=${Long}&m=5000`)
        .then(res => {
            
          const data = res.data;
          //console.log(data.map(x=> x.latitude))
          
          this.setState({ data });
    
        })
        .catch(error => console.log(error));
      };
    render(){
    const  {navigation}  = this.props;

    var rawArr =this.state.data

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
        latlng:{latitude: navigation.getParam('lati', 'defautlt '), longitude: navigation.getParam('long', 'defautlt ')},
        description: 'you are here'
      })


    return(
    // <MapView 
    //                     provider = {PROVIDER_GOOGLE}
    //                     style={styles.mapStyle}  
    //                     region ={{
    //                         latitude: navigation.getParam('lati', 'defautlt '),   
    //                         longitude: navigation.getParam('long', 'defautlt '),  
    //                         latitudeDelta: 0.005,  
    //                         longitudeDelta: 0.005, 
    //                     }}
    //                     >
    //                             <Marker     
    //                                 key={1}       
    //                                 coordinate={{latitude: navigation.getParam('lati', 'defautlt '), 
    //                                 longitude: navigation.getParam('long', 'defautlt ')}}
    //                             />
    //                     </MapView>
    <ScrollView>
        <View style={styles.map}>
        <Text style={styles.H1}>Your current location</Text>
    <MapView 
                        provider = {PROVIDER_GOOGLE}
                        style={styles.mapStyle}  
                        //gestureHandling= 'cooperative'
                        region ={{
                            latitude: navigation.getParam('lati', 'defautlt '),
                            longitude: navigation.getParam('long', 'defautlt '),
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
                                </View>

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
  </ScrollView>
                        
                        
                        )
                        }
};

const styles = StyleSheet.create({
    mapStyle: {
        width: '100%',
        height: 300,
        
      },
      map:{
          flex: 1,
          padding: '7%'
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

export default withNavigation(MapPreview);