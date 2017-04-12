import React, { Component } from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

let { height, width } = Dimensions.get('window');
import styles from '../../styles/forgotPasswordPage.style';

import logo from '../../../img/logo.png';
import Button from './../../components/Button';

export default class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: height,
    }
  }

  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  resetPassword = () => {
    let message = '';

    if (!this.state.email) message = `${message} Debes ingresar un e-mail válido \n`;

    if (message) {
      Alert.alert('Error', message);
    } else {
      Actions.loginPage();
    }
  }

  render () {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#3F51B5'}}
                  ref={ref => this.scrollView = ref}
                  onContentSizeChange={() => this.scrollView.scrollTo({y: 0})}
                  onLayout={(evt) => this.setState({ width: evt.nativeEvent.layout.width, height: evt.nativeEvent.layout.height })}>
      <View style={{flex: 1, height: height}}>
        <Image
          source={logo}
          style={styles.logo} />
        <View style={[styles.main, {flex: this.state.width > this.state.height ? .01 : .5}]}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.wrapperTextInput}>
            <TextInput
              ref="1"
              style={styles.textField}
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              keyboardType='email-address'
              clearButtonMode='always'
              autoCorrect={false}
              returnKeyType={'next'}
              enablesReturnKeyAutomatically={true}
              autoCapitalize="none"
              onSubmitEditing={() => this.focusNextField('2')}
            />
          </View>
          <Button onPress={() => this.resetPassword()}>ENVIAR CONTRASEÑA</Button>
        </View>
        <View style={[styles.footer, {flex: this.state.width > this.state.height ? .01 : .08}]}>
          <TouchableOpacity style={[styles.btn]} onPress={() => Actions.signUpPage()}>
              <Text style={[styles.btnText, styles.colorWhite]}>No tengo cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn]} onPress={() => Actions.signUpPage()}>
              <Text style={[styles.btnText, styles.colorWhite]}>Quiero Registrarme</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    )
  }
}
