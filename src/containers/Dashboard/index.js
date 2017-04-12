import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Dashboard = (props) => {
  return (
    <View style={styles.main}>
      <Text>Hello {props.username}!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
});

export default Dashboard;
