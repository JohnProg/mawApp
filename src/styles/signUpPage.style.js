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
  jumpRegister: {
    fontSize: 15,
    marginTop: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  btn: {
      margin: 5,
      justifyContent: 'center',
  },
  colorWhite: {
      color: '#fff'
  },
  btnText: {
      fontSize: 14,
      textAlign: 'center'
  },
  main: {
      padding: 40,
      paddingTop: 20
  },
  logo: {
      alignSelf: 'center',
      resizeMode: 'contain',
      margin: 80,
      marginTop: 60,
      marginBottom: 0,
      height: 40
  },
});

export default styles;
