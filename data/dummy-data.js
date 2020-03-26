import Category from '../models/category';
import { Component } from "react";
import axios from 'axios';

export const CATEGORIES = [
    new Category('c1', 'My Food', 'https://apis.soleet.my/fn/2019/11/20/752dd368-c638-48ed-9242-a5e1c7759594.myfood.png'),
    new Category('c2', 'My Fashion', 'https://apis.soleet.my/fn/2019/11/20/8a15ddb5-d1ac-4eda-9a84-f1cee5c1c974.myfashion.png'),
    new Category('c3', 'My Medicine', 'https://apis.soleet.my/fn/2019/11/20/a1a5399b-611e-4170-bd7a-e55b5e82cf36.mymedicine.png'),
    new Category('c4', 'My MosQ', 'https://apis.soleet.my/fn/2019/11/20/b0a2a0c2-6257-4726-8c08-46d947c09fdb.MyMosQ.png'),
    new Category('c5', 'My Profile', 'https://apis.soleet.my/fn/2019/11/20/0e0ab6f5-c4f8-496a-8b3b-6c2d36cb9a51.myprofile.png'),
    new Category('c6', 'About Us', 'https://apis.soleet.my/fn/2019/11/20/7567b1d2-7508-4177-be9c-8dcc55d3f73b.aboutus.png')
];

export const CATEGORY = [
  new Category('c1', 'My Food', 'https://apis.soleet.my/fn/2019/11/20/752dd368-c638-48ed-9242-a5e1c7759594.myfood.png'),
  new Category('c2', 'My Fashion', 'https://apis.soleet.my/fn/2019/11/20/8a15ddb5-d1ac-4eda-9a84-f1cee5c1c974.myfashion.png'),
  new Category('c3', 'My Medicine', 'https://apis.soleet.my/fn/2019/11/20/a1a5399b-611e-4170-bd7a-e55b5e82cf36.mymedicine.png'),
  new Category('c4', 'My MosQ', 'https://apis.soleet.my/fn/2019/11/20/b0a2a0c2-6257-4726-8c08-46d947c09fdb.MyMosQ.png'),
  new Category('c5', 'About Us', 'https://apis.soleet.my/fn/2019/11/20/7567b1d2-7508-4177-be9c-8dcc55d3f73b.aboutus.png')
];


//https://apis.soleet.my/fn/2019/11/8/b4579498-86ed-4341-9ee4-eb6d3d90d686.eating.png
//https://apis.soleet.my/fn/2019/11/8/bee3de73-32e4-4020-ade9-fef37e0923cb.myfashion.png

export class MapApi extends Component {
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
      this.setState({ data });
    })
    .catch(error => console.log(error));
  };
  

  render(){
    console.log(items)
    return (
      <View >
        <FlatList
          data={this.state.data}
          keyExtractor={(items, index) => items.id}
          renderItem={items}
          
        />
      </View>
    )
  }
}