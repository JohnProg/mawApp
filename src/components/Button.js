import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from './../utils/Colors';

export default ({disabled=false, onPress, children, type=1, buttonStyle, colorText}) =>
  <TouchableOpacity
    disabled={disabled}
    onPress={ () => onPress() }
    style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, { color: colorText || '#fff'}]}>{children}</Text>
  </TouchableOpacity>

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 8,
    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    marginTop: 30,
    alignSelf: 'center'
  }
});
