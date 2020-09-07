import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../utils/constants';
import { StyleSheet, Text, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const Button = ({variant, text, onPress}) => {
  let backgroundColor = variant === 'primary' ? colors.cinnaBar : colors.white;
  let color = variant !== 'primary' ? colors.cinnaBar : colors.white;
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor}]} {...{onPress}}>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {padding: 20, borderRadius: 50, marginVertical: 8, width: width - 100},
  text: {fontSize: 16, textAlign: 'center'},
})

export default Button;