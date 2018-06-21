import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = () => {
    return(<View>
        <Text h1 style = {styles.h1}>SsanBi</Text>
        <Text></Text>
        


    </View>);

}

const styles = StyleSheet.create({
h1: {
    marginTop: '20%',
    width: "100%"

}

})

export default Header;