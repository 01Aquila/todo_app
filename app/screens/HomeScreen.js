import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar style='auto' />
      <Text style={{ fontFamily: 'light', fontSize: 50 }}>Inter Black</Text>
      <Text style={{ fontFamily: 'bold-italic', fontSize: 50 }}>Inter Black</Text>
      <Text style={{ fontFamily: 'round-light', fontSize: 50 }}>Inter Black</Text>
      <Text style={{ fontFamily: 'round-light-italic', fontSize: 50 }}>Inter Black</Text>
      <Text style={{ fontFamily: 'regular', fontSize: 50 }}>Inter Black</Text>
      <Text style={{ fontFamily: 'regular-light', fontSize: 50 }}>Inter Black</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})