import React, {Component} from 'react';
import { View,StyleSheet, Image, Text, Alert, ImageBackground, ScrollView, Dimensions, TouchableOpacity  } from 'react-native';
import { withNavigation } from 'react-navigation';
import { SliderBox } from 'react-native-image-slider-box';
import { Button } from 'react-native-elements';


const { width, height } = Dimensions.get('window');
class LandingScreen extends Component {

   componentDidMount() {
    const numOfBackground = 4;
    let scrollValue = 0, scrolled = 0;
    setInterval(function () {
        scrolled++;
        if(this._scrollView != null && scrolled < numOfBackground){
            scrollValue = scrollValue + width;
            this._scrollView.scrollTo({ x: scrollValue, animated: false })}
        else{
            scrollValue = 0;
            scrolled = 0
        }
       
    }, 8000);
}

    render(){
        return(

            <View  style={styles.screen}>
            <ScrollView 
             ref={(scrollView) => { this._scrollView = scrollView; }}
             horizontal={true} pagingEnabled={true} 
             >
               <ImageBackground  source={{uri: 'https://cdn.pixabay.com/photo/2018/10/04/06/50/japanese-3723058_960_720.jpg'}} style={{height, width,}}>
                   <View style={styles.screen}>
                   <Text style={styles.text2}>Let us navigate you to the best food ever in Japan</Text>
                   </View>
                   
                </ImageBackground>
               <ImageBackground  source={{uri: 'https://cdn.pixabay.com/photo/2019/04/20/11/36/japan-4141548_960_720.jpg'}} style={{height, width}}>
               <View style={styles.screen}>
                    <Text style={styles.text2}>Experience a unique Halal world with us</Text>
               </View>
               </ImageBackground>
               <ImageBackground  source={{uri: 'https://live.staticflickr.com/4043/4461558752_7c8085772a_b.jpg'}} style={{height, width}}>
               <View style={styles.screen}>
                    <Text style={styles.text2}>Shopping is the best medicine</Text>
                    </View>
               </ImageBackground>
               <ImageBackground  source={{uri: 'https://live.staticflickr.com/8805/17339690606_ccf5dae619_b.jpg'}} style={{height, width}}>
               <View style={styles.screen}>
                    <Text style={styles.text2}>Travel through the land</Text>
                    </View>
               </ImageBackground>
            </ScrollView>
            <View style={styles.screen2}>
                <TouchableOpacity onPress={() =>{this.props.navigation.navigate({routeName: 'Home1'}); }}>
                    <Text style={styles.text3}>Browse as guest</Text>
                </TouchableOpacity>
                    <Button 
                    title="Login or Sign Up" 
                    onPress={() =>{this.props.navigation.navigate({routeName: 'Landingpage'}); }} />
              {/* <Text style={styles.text1}>Page Content</Text> */}
           </View>
          </View>


            // <ImageBackground />
            // <SliderBox sliderBoxHeight={700}
            // images={[
            //     'https://source.unsplash.com/1024x768/?nature',
            //     'https://source.unsplash.com/1024x768/?water',
            //     'https://source.unsplash.com/1024x768/?girl',
            //     'https://source.unsplash.com/1024x768/?tree'
            // ]} />
            
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen2: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        padding: 10

    },
    // text1: {
    //     color: 'white'
    // },
    text2:{
        fontFamily:'open-sans-bold',
        fontSize: 27,
        textAlign: 'center',
        color: 'white',
        padding: 10,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        textShadowColor: '#000',
    },
    text3:{
        fontFamily: 'open-sans',
        fontSize:15,
        color: 'white',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        textShadowColor: '#000',
        paddingBottom: 5
    }
})

export default withNavigation(LandingScreen);
