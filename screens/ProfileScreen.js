import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';
import { SocialIcon } from 'react-native-elements';

class ProfileScreen extends Component {
    render(){
        const  {navigation}  = this.props;
    return (
        
            <ScrollView style={styles.container}>
                <View style={styles.screen}>
            <Image source={{uri: navigation.getParam('Picture', 'default value')}}  style={{width: 200, height: 200, borderRadius: 400/2}}/>
            <View style={styles.rating}>
            <Ionicons name="md-star" size={20} color="#be0029" />
            <Ionicons name="md-star" size={20} color="#be0029" />
            <Ionicons name="md-star" size={20} color="#be0029" />
            <Ionicons name="md-star-half" size={20} color="#be0029" />
            <Ionicons name="md-star-outline" size={20} color="#be0029" />
            </View>
            <Text style={styles.H5}>ID: {navigation.getParam('Id', 'default value')}</Text>

            <Text style={styles.H1}>{navigation.getParam('Username', 'default value')}</Text>
            
            <Text style={styles.H5}>{navigation.getParam('Email', 'default value')}</Text>

            {/* <View style={styles.rating2}> */}
            <Text style={styles.H5}>122 likes </Text>
            <Text style={styles.H5}>50 shares </Text>
            <Text style={styles.H5}>100 comments </Text>
            {/* </View> */}
            {/* <View style={styles.rating2}> */}
            <Text style={styles.H5}>12 checked-in </Text>
            <Text style={styles.H5}>20 photos </Text>
            {/* </View> */}
            
            </View>
            <SliderBox sliderBoxHeight={200}
                    images={[
                        'https://source.unsplash.com/1024x768/?nature',
                        'https://source.unsplash.com/1024x768/?water',
                        'https://source.unsplash.com/1024x768/?girl',
                        'https://source.unsplash.com/1024x768/?tree'
                    ]} />
            
             <View style={styles.share}>
             <Text style={styles.H5}>Share profile to: </Text>
            <View style={styles.shareButton}>
            <SocialIcon
                  type="facebook"
                  onPress={() => {
                    alert('facebook');
                  }}
                />
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    alert('twitter');
                  }}
                />
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    alert('instagram');
                  }}
                />
                <SocialIcon
                  type="pinterest"
                  onPress={() => {
                    alert('pinterest');
                  }}
                />
                <SocialIcon
                  type="envelope"
                  onPress={() => {
                    alert('envelope');
                  }}
                />
            </View>
            </View>
            <Text></Text>
            </ScrollView>
        
    );
};
};

// ProfileScreen.navigationOptions = {
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
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
       flex: 1,
       height: '100%',
       paddingTop: 20,
       paddingBottom: 20,
       padding: 10
    },
    rating: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'center'
    },
    rating2: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center'
    },
    H1:{
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    H5:{
        fontFamily: 'open-sans',
        fontSize: 15,
    },
    share:{
        flex: 1,
        height: '100%',
        padding: 10
    },
    shareButton:{
        flex: 1,
        height: '100%',
        flexDirection: 'row'
    }
})

export default ProfileScreen;
