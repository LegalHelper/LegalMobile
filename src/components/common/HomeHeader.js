import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Title } from 'react-native-paper'

export default class HomeHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title}>header component</Title>
        <Button icon="camera" color='white'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: 'blue'
  },
  title: {
    textAlign: 'center',
    marginVertical: 12
  }
});
