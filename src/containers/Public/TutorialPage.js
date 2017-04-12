import React, { Component } from 'react';
import { Dimensions, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Swiper from 'react-native-swiper';

let { height, width } = Dimensions.get('window');
import styles from '../../styles/tutorialPage.style';
import phone from '../../../img/phone.png';
import logo from '../../../img/logo.png';
const titles = [
  'Escoge tus estilos y encuentra productos y outfits según tu perfil',
  'Presiona el boton "para mí" y encuentra outfits perfectos para cada ocasión',
  'Reserva productos ideales para ti y compralos en la tienda más cercana'
];

export default class TutorialPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: height,
      title: titles[0],
    }
  }

  onSwiped =(e, state, context) => {
    this.setState({title: titles[state.index]});
  }

  render () {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}
                  ref={ref => this.scrollView = ref}
                  onContentSizeChange={() => this.scrollView.scrollTo({y: 0})}
                  onLayout={(evt) => this.setState({ width: evt.nativeEvent.layout.width, height: evt.nativeEvent.layout.height })}>
      <View style={{flex: 1, height: this.state.width > this.state.height ? height : this.state.height}}>
        <View style={styles.main}>
          <Image
            source={logo}
            style={styles.logo} />
          <Text style={styles.title}>ENCUENTRA EL OUTFIT PERFECTO PARA CADA OCASION</Text>
          <Text style={[styles.title, styles.subTitle]}>
            {this.state.title}
          </Text>

          <Swiper height={(this.state.width > this.state.height ? height : this.state.height)/1.7}
                  loop={false}
                  width={this.state.width}
                  activeDotColor="#000"
                  dotColor="#03D4AD"
                  paginationStyle={styles.paginationStyle}
                  onMomentumScrollEnd ={this.onSwiped}>
            <Image
              source={phone}
              style={styles.slideImage} />
            <Image
              source={phone}
              style={styles.slideImage} />
            <Image
              source={phone}
              style={styles.slideImage} />
          </Swiper>
        </View>
        <View style={[styles.footer]}>
          <TouchableOpacity style={[styles.btn, styles.bgBlack]} onPress={() => Actions.signUpPage()}>
              <Text style={[styles.btnText, styles.colorWhite]}>REGISTRATE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.bgWhite]} onPress={() => Actions.loginPage()}>
              <Text style={[styles.btnText, styles.colorBlack]}>INICIAR SESION</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    )
  }
}
