import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Component</Text>
        <TextInput
          style={{ styles.input }}
          placeholder="Search for flights here.."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: '#f32',
    alignItems: 'center'
  },
  input: {
      height: '40'
  }
});

export default Search;
