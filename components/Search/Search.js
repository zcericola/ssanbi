import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Search extends Component {
  state = {
    input: ''
  }

  
  render() {
    console.log('state', this.state.input);
    return (
      <View style={styles.container}>
        <Text>Search Component</Text>
        <TextInput
          style={styles.input}
          placeholder="Search for flights here.."
       onChange = {(e) => {this.setState({input: e.target.value})}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  input: {
    marginTop: '20%',
    borderStyle: 'solid',
    borderColor: '#232323'
  }
});

export default Search;
