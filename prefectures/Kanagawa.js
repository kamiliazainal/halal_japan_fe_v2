import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image, Button } from "react-native";
import { withNavigation } from 'react-navigation';
import axios from 'axios';

class Kanagawa extends Component {
constructor(props){
    super(props)
  this.state = {
    data: []
  };}

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    axios.get(`https://apis.soleet.my/halalsrv/top5`)
    .then(res => {
        
      const data = res.data;
      const newData = data.filter(x => x.area == 'Kanagawa')
      //console.log(newData);
      this.setState({ newData });
    })
  };

 keyExtractor=(item, index) => item.key
 renderListOfKanagawaRestaurant = ({item}) => (
    <View style={styles.screen}>
        <Image source= {{ uri: item.menu1 }} style={styles.image}/>
        <View>
        <Text style={styles.title}>{item.namerestaurant}</Text>
        <Text style={styles.resname} numberOfLines={2}>Address: {item.address}</Text>
        <Text style={styles.resname}>Cuisine: {item.cuisine}</Text>
        </View>
    </View>
)


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.newData}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderListOfKanagawaRestaurant}
        />
        {/* <Button onPress={() => this.props.navigation.navigate('ListOfRestaurant')} color="grey" title="See More"/> */}
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
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    paddingLeft: 5
},
  resname: {
      fontFamily: 'open-sans',
      fontSize: 15,
      paddingLeft: 5
  },
  image: {
      width: 80,
      height: 80
  }
});

export default withNavigation(Kanagawa);