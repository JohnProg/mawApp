import React, { Component } from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Components
import CheckBox from './../../components/CheckBox';

let {height, width} = Dimensions.get('window');
import styles from '../../styles/signUpPage.style';

import logo from '../../../img/logo.png';
import Button from './../../components/Button';

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: height,
      acceptedTerms: false
    }
  }

  focusNextField(nextField) {
   this.refs[nextField].focus();
  }

  register = () => {
    let message = '';

    if (!this.state.name) message = 'Debes ingresar un nombre \n';
    if (!this.state.email) message = `${message} Debes ingresar un e-mail válido \n`;
    if (!this.state.password) message = `${message} Debes ingresar una contraseña`;
    if (this.state.password && this.state.password.length < 8) message = `${message} La contraseña debe tener al menos 8 carácteres`;

    if (message) {
      Alert.alert('Error', message);
    } else {
      Actions.dashboardPage({username: 'John'});
    }
  }

  render () {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#795548'}}
                  ref={ref => this.scrollView = ref}
                  onContentSizeChange={() => this.scrollView.scrollTo({y: 0})}
                  onLayout={(evt) => this.setState({ width: evt.nativeEvent.layout.width, height: evt.nativeEvent.layout.height })}>
      <View style={{flex: 1, height: height}}>
        <Image
          source={logo}
          style={styles.logo} />
        <View style={[styles.main, {flex: this.state.width > this.state.height ? .01 : .5}]}>
          <Text style={styles.label}>Nombre</Text>
          <View style={styles.wrapperTextInput}>
            <TextInput
              ref="1"
              style={styles.textField}
              onChangeText={(text) => this.setState({name: text})}
              value={this.state.name}
              autoCapitalize="words"
              clearButtonMode='always'
              autoCorrect={false}
              returnKeyType={'next'}
              enablesReturnKeyAutomatically={true}
              autoCapitalize="none"
              onSubmitEditing={() => this.focusNextField('2')}
            />
          </View>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.wrapperTextInput}>
            <TextInput
              ref="2"
              style={styles.textField}
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              keyboardType='email-address'
              clearButtonMode='always'
              autoCorrect={false}
              returnKeyType={'next'}
              enablesReturnKeyAutomatically={true}
              autoCapitalize="none"
              onSubmitEditing={() => this.focusNextField('3')}
            />
          </View>
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.wrapperTextInput}>
            <TextInput
              ref="3"
              style={styles.textField}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              secureTextEntry={true}
              clearButtonMode='always'
              autoCorrect={false}
              returnKeyType={'done'}
              enablesReturnKeyAutomatically={true}
              autoCapitalize="none"
              onSubmitEditing={this.login}
             />
          </View>
          <CheckBox
              style={{paddingTop: 20}}
              onPress={() => this.setState({acceptedTerms: !this.state.acceptedTerms})}
              isChecked={this.state.acceptedTerms}
              rightText={'Acepto las Condiciones del servicio y la Política de Privacidad de DRESS'}
          />
          <Button onPress={ () => this.register() }>REGISTRARME</Button>
          <Text onPress={() => Actions.dashboardPage()} style={styles.jumpRegister}>NAVEGAR SIN REGISTRARME</Text>
        </View>
        <View style={[styles.footer, {flex: this.state.width > this.state.height ? .01 : .08}]}>
          <TouchableOpacity style={[styles.btn, {flex: .4}]} onPress={() => Actions.pop()}>
              <Text style={[styles.btnText, styles.colorWhite]}>CANCELAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {flex: .6}]} onPress={() => Actions.loginPage()}>
              <Text style={[styles.btnText, styles.colorWhite]}>YA TENGO UNA CUENTA</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    )
  }
}
