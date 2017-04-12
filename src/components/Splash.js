import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';

const y = Dimensions.get('window').height;

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../../img/logo.png')} style={styles.logo}/>
        <Text style={styles.title}>ENCUENTRA EL OUTFIT PERFECTO PARA CADA OCASION</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    marginTop: 200
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    margin: 30,
    textAlign: 'center'
  }
});
