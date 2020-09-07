import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../utils/constants';
import Header from '../components/header';
import Button from '../components/Button';
import Input from '../components/Input';

const {width} = Dimensions.get('window');

class SignUp extends Component{
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
            <Text style={styles.headingText}>{`New\nAccount`}</Text>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarImgContainer}>
                <Image source={require('../../assets/icons/camera.png')} style={styles.avatarImg} />
              </View>
              <Text style={styles.avatarText}>{`Upload picture`}</Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <Input label={'Email'} value={email} onChangeText={txt => this.onChangeText(txt, 'email')} placeholder={'abc@gmai.com'} icon={require('../../assets/icons/mail.png')} />
            <Input label={'Username'} value={username} onChangeText={txt => this.onChangeText(txt, 'username')} placeholder={'John'} icon={require('../../assets/icons/user.png')} />
            <Input label={'Password'} value={password} onChangeText={txt => this.onChangeText(txt, 'password')} placeholder={'#########'} icon={require('../../assets/icons/key.png')} />
            <Button variant="primary" text="Sign up" onPress={() => true} />
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
  avatarImgContainer: {borderWidth: 1, borderColor: colors.cinnaBar, borderRadius: 50, height: 48, width: 48, justifyContent: 'center', alignItems: 'center'},
  avatarContainer: {justifyContent: 'center', alignItems: 'center'},
  avatarImg: {height: 24, width: 24},
  avatarText: {fontSize: 10, color: `${colors.black}50`, marginTop: 5},
  headingText: {fontSize: 28, fontWeight: 'bold'},
  innerContainer: {flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: width - 100, paddingTop: 40, paddingBottom: 20},
  formContainer: {flex: 1}
})

export default SignUp;