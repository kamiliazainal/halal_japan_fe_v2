import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity } from "react-native";
import axios from 'axios';
import { withNavigation } from 'react-navigation';

class Tokyo extends Component {
constructor(props){
    super(props)
  this.state = {
    data: []
  };}

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    axios.get(`https://apis.soleet.my/halalsrv/search?type=eatery,fff&area=Tokyo`)
    .then(res => {
        
      const data = res.data;
      const newData = data.slice(0,5)
      //console.log(newData);
      this.setState({ newData });
    })
    .catch(error => console.log(error));
  };

 keyExtractor=(item, index) => item.id
 renderListOfTokyoRestaurant = ({item}) => (
  <TouchableOpacity onPress={() => this.onPressBack(item)} >
    {/* onPress={() => this.funcapa2(item)} */}
    <View style={styles.screen}  >
        <Image source= {{ uri: item.urlrestaurant }} style={styles.image} />
        <View style={styles.screen2}>
        <Text style={styles.title}>{item.namerestaurant}</Text>
        <Text style={styles.resname} numberOfLines={2} ellipsizeMode="middle">Address: {item.address}</Text>
        <Text style={styles.resname}>Cuisine: {item.cuisine}</Text>
        <Text style={styles.resname2}>Click for more</Text>
        </View>    
    </View>
    </TouchableOpacity>
)

  onPressBack(item){
      Alert.alert(
        ('Website: ' + item.linkofshare),
        ('Phone Number: ' + item.phone_number),
        [
          //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Close',
            onPress: () => console.log('Close Pressed'),
            style: 'cancel',
          },
          {text: 'See detail', onPress: () => {this.props.navigation.navigate({routeName: 'restaurantDetail', params: {
            Ids: item.id, 
            Names: item.namerestaurant, 
            Addresses: item.address, 
            Areas: item.area, 
            Mobile: item.phone_number, 
            Types: item.type, 
            Cuisines: item.cuisine, 
            MainImage: item.urlrestaurant, 
            Menus1: item.menu1, 
            Menus2: item.menu2,
            Menus3: item.menu3, 
            Menus4: item.menu4,
            Longitude: item.longitude,
            Latitude: item.latitude
          }})}},
        ],
        //{cancelable: false},
      );
      //console.log(menus2)
  }
    


  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.newData}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderListOfTokyoRestaurant}
        />
        {/* <Button onPress={() => this.props.navigation.navigate('restaurantlist')} color="grey" title="See More"/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  screen: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingVertical: 5
  },
  screen2: {
    paddingRight: 50
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    paddingLeft: 5
},
  resname: {
      fontFamily: 'open-sans',
      fontSize: 14,
      paddingLeft: 5,
      marginRight: 30
  },
  resname2: {
    fontFamily: 'open-sans-bold',
    color: 'grey',
    fontSize: 11,
    paddingLeft: 7,
    marginRight: 30
},
  image: {
      width: 80,
      height: 80
  }
});

export default withNavigation(Tokyo);