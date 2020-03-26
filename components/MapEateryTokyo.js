import React, { Component } from "react";
import { FlatList, StyleSheet,View, Text} from "react-native";
import axios from 'axios';
import { withNavigation } from 'react-navigation';

class MapEateryTokyo extends Component {
constructor(){
    super()
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
      this.setState({ data });

    })
    .catch(error => console.log(error));
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => item.key}
          renderItem={({ item }) =>
            <Text>
              {item.namerestaurant}
            </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default withNavigation(MapEateryTokyo);