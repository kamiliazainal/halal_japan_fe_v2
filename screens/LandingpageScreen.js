import React, {Component} from 'react';
import { View,StyleSheet, Image, Text, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import { SocialIcon, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class LandingpageScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            userInfo: null
        }
    }

    async logInFB() {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync('3072078372821560', {
            permissions: ['public_profile', 'email'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
              `https://graph.facebook.com/me?access_token=${token}&fields=id,email,name,picture.type(large)`);
            //
            const user = await response.json();
            //console.log('user: ',user)
            
            this.setState({userInfo: user});

            //Alert.alert('Logged in!', `Hi ${(await response.json()).user.name}!`);
          } else {
             //type === 'cancel'
          }
        } catch ({ message }) {
         // alert(`Facebook Login Error: ${message}`);
        }
      }


      _renderUserInfo = () => {
        
          return (
              // <View style={{alignItems: 'center'}}>
              //     <Image
              //     source={{uri: this.state.userInfo.picture.data.url}}
              //     style={{width: 100, height: 100, borderRadius: 50}}
              //     />
              //     <Text style={{fontSize: 20}}>Name: {this.state.userInfo.name}</Text>
              //     <Text>Email: {this.state.userInfo.email}</Text>

              //     <Button 
              //       title="Go to profile" 
              //       onPress={() =>{
              //         this.props.navigation.navigate({routeName: 'ProfilePage', params:{
              //           Picture: this.state.userInfo.picture.data.url,
              //           Username: this.state.userInfo.name,
              //           Email: this.state.userInfo.email,
              //           Id: this.state.userInfo.id
              //         }});
              //         }}  />
              // </View>
              Alert.alert(
                ('Hi ' + this.state.userInfo.name + '!'),
                'Please click continue',
                [
                  {text: 'Continue', onPress: () => this.props.navigation.navigate({routeName: 'ProfilePage', params: {
                  Picture: this.state.userInfo.picture.data.url,
                            Username: this.state.userInfo.name,
                            Email: this.state.userInfo.email,
                            Id: this.state.userInfo.id
                }})}
              ],
              {cancelable: false},
              )
              
          )
          
      }

    render(){
      
    return (
        <View style={styles.screen}>
            <Image style={styles.welcome}
            source={require('../assets/logo1.png')}
            />
            {/* <View style={styles.buttonContainer2}>
                <Button 
                    type="clear"
                    title="Browse as guest" 
                    onPress={() =>{this.props.navigation.navigate({routeName: 'HomePage'}); }} />
            </View> */}
            <View style={styles.buttonFacebook}>
                {/* <Button 
                    title="Connect with Facebook" 
                    onPress={this.logInFB.bind(this)} /> */}
                    {!this.state.userInfo ? (<SocialIcon button  type="facebook"
                    title="Connect with Facebook" 
                    onPress={this.logInFB.bind(this)} />): (this._renderUserInfo())}
                    <SocialIcon button type="twitter" title="Connect with Twitter"/>
                    <SocialIcon button type="google" title="Connect with Google"/>
                    {/* <Button 
                    title="Connect with Facebook" 
                    onPress={() =>{
                      this.props.navigation.navigate({routeName: 'Loginpage', params:{
                        Picture: this.state.userInfo.picture.data.url,
                        Username: this.state.userInfo.name,
                        Email: this.state.userInfo.email,
                        Id: this.state.userInfo.id
                      }});
                      }}  /> */}
            </View>
            
            <View style={styles.owner}>
            <Text style={styles.textOwner}>Are you restaurant owner ?</Text>
                <View style={styles.button}>
                    <Button title="Login" 
                    onPress={() =>{
                         this.props.navigation.navigate({routeName: 'Loginpage'});
                        }}
                    />
                </View>
                {/* <View style={styles.button}>
                    <Button title="Sign Up"/>
                </View> */}
            </View>
        </View>
    );
};
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    welcome: {
        width: 200,
        height: 160,
        //marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      container1: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
        // backgroundColor: '#fff',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
      },
      buttonContainer2: {
        padding: 10,
      },
      buttonFacebook: {
        paddingHorizontal: 10,
        width: '65%'
      },
      button: {
        width: '40%'
      },
      owner: {
        padding: 40,
        alignItems: 'center',
      },
      textOwner: {
        fontFamily: 'open-sans',
        fontSize: 15
      }
})

export default withNavigation(LandingpageScreen);
