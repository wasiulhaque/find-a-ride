import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View style={tw`p-5`}>
      <Image
        style={{
            width: 110,
            height: 100,
            marginTop: 30,
            marginLeft: 0,
            resizeMode: "contain",
        }}
        source={{
            uri: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
        }}
      />

      <NavOptions/>
      <StatusBar style='auto'/>
    </View>
    
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})