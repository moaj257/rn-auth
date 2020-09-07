import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { colors } from '../utils/constants';
import Header from '../components/header';
import Button from '../components/Button';

const Onboarding = ({navigation}) => (
  <ImageBackground style={styles.container} imageStyle={styles.imgContainer} source={require('../../assets/backgrounds/bg-waves.jpg')}>
    <View style={[styles.container]}>
      <Header />
    </View>
    <View style={[styles.container, styles.flexCenter]}>
      <Button variant="primary" text="Sign up" onPress={() => navigation.navigate('SignUp')} />
      <Button variant="default" text="Sign in" onPress={() => navigation.navigate('SignIn')} />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {flex: 1},
  flexCenter: {justifyContent: 'center', alignItems: 'center'},
  imgContainer: {opacity: 0.75, backgroundColor: colors.black},
})

export default Onboarding;