import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, BackHandler, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { withNavigation } from 'react-navigation';


class HomepageScreen extends Component{

    // constructor(props){
    //     super(props)
    //     this.state= {
    //         item: [],
    //     }
    // }
    // static navigationOptions = {
    //   headerTitle: 'Home',
    // };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        //this.renderGridItem();
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
      }

      
      onBackPress = () => {
 
        //Code to display alert message when use click on android device back button.
        Alert.alert(
          ' Exit From App ',
          ' Do you want to exit From App ?',
          [
            { text: 'Yes', onPress: () => BackHandler.exitApp() },
            { text: 'No', onPress: () => console.log('NO Pressed') }
          ],
          { cancelable: false },
        );
     
        // Return true to enable back button over ride.
        return true;
      }

      navigationOptions= () => ({
        title: 'Configuration',
        headerBackTitle: null,
        headerLayoutPreset:'center',
        headerLeft: null
      })

    render(){

      return(
      <View style={styles.screen2}>
            <TouchableOpacity 
        style={styles.gridItem}
        onPress={() => {this.props.navigation.navigate({ routeName: 'Explore1'});}}
        >
            <View style={styles.container}>
                    <ImageBackground 
                        source={{uri: `https://i.pinimg.com/originals/ea/10/d8/ea10d8de6a03259356ee4e9c20fc30e7.jpg`}}
                        style={styles.bgImage}
                        />
            </View>
           
        </TouchableOpacity>
         <View style={styles.titleContainer}>
         <Text style={styles.title} numberOfLines={1}>
           Halal Food
             {/* {props.title} */}
         </Text>
     </View>

     <TouchableOpacity 
        style={styles.gridItem}
        // onPress={props.onSelect}
        >
            <View style={styles.container}>
                    <ImageBackground 
                        source={{uri: `https://cdn.pixabay.com/photo/2019/07/15/19/20/fashion-4340237_960_720.png`}}
                        style={styles.bgImage}
                        />
            </View>
           
        </TouchableOpacity>
         <View style={styles.titleContainer}>
         <Text style={styles.title} numberOfLines={1}>
           Halal Fashion
             {/* {props.title} */}
         </Text>
     </View>

     <TouchableOpacity 
        style={styles.gridItem}
        // onPress={props.onSelect}
        >
            <View style={styles.container}>
                    <ImageBackground 
                        source={{uri: `https://torange.biz/photo/18/IMAGE/medicine-18984.jpg`}}
                        style={styles.bgImage}
                        />
            </View>
           
        </TouchableOpacity>
         <View style={styles.titleContainer}>
         <Text style={styles.title} numberOfLines={1}>
           Halal Medicine
             {/* {props.title} */}
         </Text>
     </View>


     </View>
     )

        // if (CATEGORIES) {

        //   var myList = CATEGORIES;
        //   var arrMyList = [];

        //   myList.forEach(x => 
        //     arrMyList.push({
        //       key: x.id,
        //       title: x.title,
        //       image: x.imageUrl,
        //       //cat: x.id
        //     })
        //     )

        //   let a= CATEGORIES.map(x=> x.id)
        //   let c1= a.slice(0,1).pop()
        //   let c2= a.slice(0,2).pop()
        //   let c3= a.slice(0,3).pop()
        //   let c4= a.slice(0,4).pop()
        //   let c5= a.slice(0,5).pop()
        //   let c6= a.slice(0,6).pop()
        //     //console.log('aaaa', a)
        //     //console.log('bbbb', b)

        //     if (c1){
        //     return(

        //       <View>
        //         {myList.map((list, index)=>
        //         <View numColumns={2}
        //         key = {index}>
        //           <Text>{list.title}</Text>
        //           <Image style={styles.img} source={{uri: list.imageUrl}}/>
        //         </View>
                  
        //         )}
        //       </View>
        //     )
        //         }

  //           if (c1){
              
  //           return(
  //               <FlatList
  //       keyExtractor={(item, index) => item.id}
  //       data={CATEGORIES}
  //       renderItem={({ item }) =>
  //                   <View>
  //                        <CategoryGridTile
  //                        title={item.title}
  //                        imageUrl={item.imageUrl}
  //                        onSelect={() => {
  //                           this.props.navigation.navigate({ routeName: 'Explore1',
  //                           params: {
  //                               categoryId: item.id
  //                           }
  //                       });}}
  //                        />
  //                   {/* <Text style={styles.H1}>{item.title}</Text> */}
                    

  //                   </View>
  //                   }
  //       numColumns={2}
  //       />
  //       )
  //     }

  //     else if (c5){
  //       return(
  //         <FlatList
  // keyExtractor={(item, index) => item.id}
  // data={CATEGORIES}
  // renderItem={({ item }) =>
  //             <View>
  //                  <CategoryGridTile
  //                  title={item.title}
  //                  imageUrl={item.imageUrl}
  //                  onSelect={() => {
  //                     this.props.navigation.navigate({ routeName: 'ProfilePage',
  //                     params: {
  //                         categoryId: item.id
  //                     }
  //                 });}}
  //                  />
  //             {/* <Text style={styles.H1}>{item.title}</Text> */}
              

  //             </View>
  //             }
  // numColumns={2}
  // />
  // )
  //     }

  //     else if (c6){
  //       return(
  //         <FlatList
  // keyExtractor={(item, index) => item.id}
  // data={CATEGORIES}
  // renderItem={({ item }) =>
  //             <View>
  //                  <CategoryGridTile
  //                  title={item.title}
  //                  imageUrl={item.imageUrl}
  //                  onSelect={() => {
  //                     this.props.navigation.navigate({ routeName: 'AboutPage',
  //                     params: {
  //                         categoryId: item.id
  //                     }
  //                 });}}
  //                  />
  //             {/* <Text style={styles.H1}>{item.title}</Text> */}
              

  //             </View>
  //             }
  // numColumns={2}
  // />
  // )
  //     }

  //     else{
  //       return null
  //     }

    }
}


// const HomepageScreen = props => {
//     const renderGridItem = (itemData) => {
//         console.log('homepagescreen.js')
//         if (itemData.item.id == "c1") {
//             return (
//             <CategoryGridTile 
//         title={itemData.item.title}
//         imageUrl={itemData.item.imageUrl}
//         onSelect={() => {
//             props.navigation.navigate({ routeName: 'Explore1',
//             params: {
//                 categoryId: itemData.item.id
//             }
//         });
//         }}
//         />)
//            }
//            else if (itemData.item.id =="c5"){
//                return (
//                 <CategoryGridTile 
//                 title={itemData.item.title}
//                 imageUrl={itemData.item.imageUrl}
//                 onSelect={() => {
//                     props.navigation.navigate({ routeName: 'ProfilePage',
//                     params: {
//                         categoryId: itemData.item.id
//                     }
//                 });
//                 }}
//                 />
//                )
//            }
//            else if (itemData.item.id=="c6"){
//                return (
//                 <CategoryGridTile 
//                 title={itemData.item.title}
//                 imageUrl={itemData.item.imageUrl}
//                 onSelect={() => {
//                     props.navigation.navigate({ routeName: 'AboutPage',
//                     params: {
//                         categoryId: itemData.item.id
//                     }
//                 });
//                 }}
//                 />
//                )
//            }
//            else {
//         return <CategoryGridTile 
//         title={itemData.item.title}
//         imageUrl={itemData.item.imageUrl}
//         onSelect={() => {
//         //     props.navigation.navigate({ routeName: 'ExplorePage',
//         //     params: {
//         //         categoryId: itemData.item.id
//         //     }
//         // });
//         }}
//         />}
//     };
//     return (
//         <FlatList
//         keyExtractor={(item, index) => item.id}
//         data={CATEGORIES}
//         renderItem={renderGridItem}
//         numColumns={2}
//         />
//     );
// };

// HomepageScreen.navigationOptions = {
//         headerTitle: 'Home',
//         headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
//             <Item 
//                 title= 'search'
//                 iconName= 'md-search'
//                 onPress={() => {
                    
//                 }}
//             />
//         </HeaderButtons>)
// };


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
      width: 100,
      height: 100
    },
    screen2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin:5,
      //backgroundColor: 'blue'
  },
  gridItem: {
      //marginVertical: 10,
      //height: 150,
      overflow: 'hidden',
      elevation: 2,
      borderRadius: 400/ 2
  },
  container: {
      //borderRadius: 400/ 2,
      width: 120,
      height: 120,
      shadowColor: 'silver',
      shadowOpacity: 0.26,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 10,
      //padding: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  titleContainer: {
      paddingTop: '1%'
  },
  title: {
      fontFamily: 'open-sans-bold',
      fontSize: 18,
      textAlign: 'left'
  },
  bgImage: {
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center'
  }
})

export default withNavigation(HomepageScreen);
