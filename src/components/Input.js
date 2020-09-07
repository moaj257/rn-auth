import React from 'react';
import { colors } from '../utils/constants';
import { StyleSheet, Text, Dimensions, Image, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

const Input = ({label, value, onChangeText, placeholder, icon}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={icon} />
        <TextInput style={styles.input} {...{value, onChangeText, placeholder}} autoCorrect={false} autoFocus={false} placeholderTextColor={`${colors.black}40`} underlineColorAndroid="transparent" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {marginVertical: 10, width: width - 100},
  label: {fontSize: 12, color: `${colors.black}90`},
  inputContainer: {flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.cinnaBar},
  input: {flex: 1, marginLeft: 5, fontSize: 16},
  inputIcon: {height: 16, width: 16, marginRight: 5},
})

export default Input;