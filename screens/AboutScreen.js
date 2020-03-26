import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import { Ionicons } from '@expo/vector-icons'

const AboutScreen = props => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C2.9390,101.6827&key=AIzaSyCbAtQ2yeosVf_2P3iirM-DkSHPZWWd4ks`;
    
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.maintext}>About</Text>
            <View>
                <Text style={styles.text1}> 
                Spatialworks Sdn Bhd is a technology driven GIS-IT and environmental consultancy company, provides a complete spectrum of geographic information system (GIS) and technology driven environmental solutions to both public and private sector clients.</Text>
                <Text style={styles.text1}>Spatialworks Sdn Bhd is a client-focused company where it is our commitment to provide cost-effective solutions for the clients, continuously seeking for the best and the latest state-of-the-art technological solutions for the betterment of our environment, and to support them from beginning to the end in their efforts.</Text>
                <Text style={styles.text1}>Our staff is a group of highly focussed and dedicated professionals who have been working together with proven commitment to our clients in delivering above expectation services and products.
                </Text>
                <Text style={styles.maintext}>Contact Us</Text>
                <Image style={styles.mapImage} source={{uri: imagePreviewUrl}}/>
                <View style={styles.screen2}>
                <Ionicons 
                name="ios-send"
                size={15} 
                color="#be0029"
                >
                <Text style={styles.text2}> 
                 Block C - T.02 - U.04, NO. 1, Jalan P8D, 62250 WP Putrajaya Malaysia.
                </Text>
                </Ionicons>
                </View>

                <View style={styles.screen2}>
                <Ionicons 
                name="ios-call"
                size={15} 
                color="#be0029"
                >
                <Text style={styles.text2}> 
                 +603 8881 0962
                </Text>
                </Ionicons>
                </View>

                <View style={styles.screen2}>
                <Ionicons 
                name="md-print"
                size={15} 
                color="#be0029"
                >
                <Text style={styles.text2}> 
                 +603 8881 0870
                </Text>
                </Ionicons>
                </View>

                <View style={styles.screen2}>
                <Ionicons 
                name="md-globe"
                size={15} 
                color="#be0029"
                >
                <Text style={styles.text2}> 
                 http://www.spatialworks.com.my
                </Text>
                </Ionicons>
                </View>
            </View>


            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <TouchableOpacity 
                    onPress={() =>{
                        }}>
                        <Image source={{uri: 'https://apis.soleet.my/fn/2019/11/11/7e1ae6ac-79d0-43ca-9928-5c957b8a9bff.flag.png'}}
                        style={styles.bgImage} />
                        <Text>Send report</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity >
                        <Image source={{ uri: 'https://apis.soleet.my/fn/2019/11/11/66497524-b42e-46de-befc-7060b44b5310.enquiry.png'}}
                        style={styles.bgImage} />
                        <Text>Send enquiry</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

};

AboutScreen.navigationOptions = {
    headerTitle: 'Halal Map',
    headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title= 'search'
            iconName= 'md-search'
            onPress={() => {
                
            }}
        />
    </HeaderButtons>)
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    maintext: {
        fontFamily: 'open-sans',
        fontWeight: '600',
        fontSize: 22,
        textAlign: 'left',
        paddingHorizontal:10
    },
    text1: {
        padding: 10,
        textAlign: 'justify',
        fontFamily: 'open-sans',
        fontSize: 15
    },
    text2: {
        marginLeft: 40,
        textAlign: 'justify',
        fontFamily: 'open-sans',
        fontSize: 15
    },
    mapImage: {
        //marginBottom: 10,
        padding: 10,
        width: '100%',
        height: 200,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen2: {
        padding: 10
    },
    bgImage: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
      },
      button: {
        width: '50%',
        paddingHorizontal: 35
      }
})

export default AboutScreen;
