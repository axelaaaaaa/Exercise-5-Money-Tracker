import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Photos from '../../assets/icons/Vector.svg'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Photos />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
    )
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02cf8e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
    }
});