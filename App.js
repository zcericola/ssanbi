import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search/Search';
import Header from './components/Header/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
   
  },
});
