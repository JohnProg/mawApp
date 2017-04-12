import React, { Component } from 'react';
import { Alert, Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { emailChanged, passwordChanged, loginUser } from '../../actions';

let { height, width } = Dimensions.get('window');
import styles from '../../styles/logInPage.style';

import logo from '../../../img/logo.png';
import Button from './../../components/Button';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: height,
    }
  }

  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  login = () => {
    let message = '';
    const { email, password } = this.props;

    if (!email) message = `${message} Debes ingresar un e-mail válido \n`;
    if (!password) message = `${message} Debes ingresar una contraseña`;
    if (password && password.length < 8) message = `${message} La contraseña debe tener al menos 8 carácteres`;

    if (message) {
      Alert.alert('Error', message);
    } else {
      this.props.loginUser({ email, password });
    }
  }

  render () {
    const { email, password } = this.props;

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#2196F3'}}
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
              onChangeText={this.onEmailChange.bind(this)}
              value={email}
              keyboardType='email-address'
              clearButtonMode='always'
              autoCorrect={false}
              returnKeyType={'next'}
              enablesReturnKeyAutomatically={true}
              autoCapitalize="none"
              onSubmitEditing={() => this.focusNextField('2')}
            />
          </View>
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.wrapperTextInput}>
            <TextInput
              ref="2"
              style={styles.textField}
              onChangeText={this.onPasswordChange.bind(this)}
              value={password}
              secureTextEntry={true}
              clearButtonMode='always'
              autoCorrect={false}
              returnKeyType={'done'}
              enablesReturnKeyAutomatically={true}
              autoCapitalize="none"
              onSubmitEditing={this.login}
             />
          </View>
          <Text onPress={() => Actions.forgotPasswordPage()} style={styles.forgotPassword}>Olvidaste tu contraseña?</Text>
          <Button disabled={this.props.loading} onPress={ () => this.login() }>{ this.props.loading ? 'loading...' : 'INGRESA'}</Button>
        </View>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
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

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(
    mapStateToProps,
    { emailChanged, passwordChanged, loginUser }
)(LogInPage);
