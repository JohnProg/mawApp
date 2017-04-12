import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
      flex: .08,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#000',
      bottom: 0
  },
  btn: {
      flex: 1,
      margin: 5,
      justifyContent: 'center',
  },
  bgBlack: {
      backgroundColor: '#000'
  },
  bgWhite: {
      backgroundColor: '#fff'
  },
  colorBlack: {
      color: '#000'
  },
  colorWhite: {
      color: '#fff'
  },
  btnText: {
      fontSize: 16,
      textAlign: 'center'
  },
  main: {
      flex: .9,
      justifyContent: 'center',
  },
  logo: {
      alignSelf: 'center',
      resizeMode: 'contain',
  },
  title: {
      textAlign: 'center',
      fontSize: 16,
      paddingRight: 5,
      paddingLeft: 5,
      margin: 20,
      marginBottom: 10
  },
  subTitle: {
      fontWeight: '500',
      fontStyle: 'italic',
      marginTop: 0,
  },
  paginationStyle:{
      bottom: 0,
      position: 'relative',
  },
  slideImage: {
      resizeMode: 'contain',
      alignSelf: 'center',
      flex: 0.6,
      marginBottom: 20
  },
});

export default styles;
