import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../utils/constants';
import Header from '../components/header';
import Button from '../components/Button';
import Input from '../components/Input';

const {width} = Dimensions.get('window');

class SignIn extends Component{
  state = {email: '', username: '', password: ''};

  onChangeText = (txt, name) => this.setState({[name]: txt});
  
  render() {
    const {email, username, password} = this.state;

    return (
      <ImageBackground style={styles.container} imageStyle={styles.imgContainer} source={require('../../assets/backgrounds/bg-waves.jpg')}>
        <View>
          <Header />
        </View>
        <View style={[styles.container, styles.bottomContainer]}>
          <View style={styles.innerContainer}>
            <Text style={styles.headingText}>{`Welcome back\nAlice`}</Text>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarImgContainer}>
                <Image source={{uri: `https://picsum.photos/100?random=${new Date().getTime()}`}} style={styles.avatarImg} />
              </View>
            </View>
          </View>
          <View style={styles.formContainer}>
            <Input label={'Password'} value={password} onChangeText={txt => this.onChangeText(txt, 'password')} placeholder={'#########'} icon={require('../../assets/icons/key.png')} />
            <TouchableOpacity>
              <Text style={styles.forgotPass}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button variant="primary" text="Sign in" onPress={() => true} />
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>or sign in with</Text>
              <View style={styles.footerInnerContainer}>
                <TouchableOpacity style={styles.footerIcon}>
                  <Image source={require('../../assets/icons/google.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                  <Image source={require('../../assets/icons/facebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                  <Image source={require('../../assets/icons/twitter.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  bottomContainer: {justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, borderTopLeftRadius: 50, borderTopRightRadius: 50},
  imgContainer: {opacity: 0.75, backgroundColor: colors.black},
  avatarImgContainer: {borderWidth: 1, borderColor: colors.cinnaBar, borderRadius: 50, height: 48, width: 48, justifyContent: 'center', alignItems: 'center', overflow: 'hidden'},
  avatarContainer: {justifyContent: 'center', alignItems: 'center'},
  avatarImg: {height: 48, width: 48},
  headingText: {fontSize: 28, fontWeight: 'bold'},
  innerContainer: {flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: width - 100, paddingTop: 40, paddingBottom: 20},
  forgotPass: {fontSize: 14, color: colors.cinnaBar, marginBottom: 10, textAlign: 'right'},
  formContainer: {flex: 1},
  footerContainer: {paddingVertical: 25},
  footerText: {fontSize: 14, color: `${colors.black}75`, textAlign: 'center', marginBottom: 15},
  footerInnerContainer: {flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  footerIcon: {marginHorizontal: 10, padding: 5}
})

export default SignIn;