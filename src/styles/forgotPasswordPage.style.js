import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  wrapperTextInput: {
    borderBottomWidth: 2
  },
  textField: {
    height: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 3
  },
  label: {
      fontSize: 16,
      marginTop: 20,
      marginBottom: 5,
      color: '#fff'
  },
  btn: {
      flex: 1,
      margin: 5,
      justifyContent: 'center',
  },
  colorWhite: {
      color: '#fff'
  },
  btnText: {
      fontSize: 16,
      textAlign: 'center'
  },
  main: {
      justifyContent: 'center',
      padding: 40,
  },
  logo: {
      alignSelf: 'center',
      resizeMode: 'contain',
      margin: 80,
      marginBottom: 0,
      height: 40
  },
});

export default styles;
