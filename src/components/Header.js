import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from '../utils/constants';

const Header = () => (
  <View style={styles.paddingContainer}>
    <View style={[styles.logoContainer]}>
      <Image style={styles.logo} source={require('../../assets/icons/javascript.png')} />
    </View>
    <Text style={styles.text}>{`Enjoy the trip\nwith me`}</Text>
  </View>
);

const styles = StyleSheet.create({
  logo: {height: 45, width: 45},
  logoContainer: {padding: 10, backgroundColor: colors.white, height: 65, width: 65, borderRadius: 10},
  paddingContainer: {paddingTop: 70, paddingBottom: 40, paddingHorizontal: 50},
  text: {color: colors.white, fontSize: 36, marginTop: 20},
})

export default Header;