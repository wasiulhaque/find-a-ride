import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const PaymentScreen = () => {
const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-col py-25 bg-white`}>
        
        <Image
        style={{
            width: 395,
            height: 250,
            marginTop: 30,
            marginBottom: 20,
            marginLeft: 0,
            
        }}
        source={{uri: "https://i.gifer.com/XD4x.gif"}}
        />
        <Text style={tw`flex-col text-center text-7 font-semibold py-2`}>Payment Successful</Text>
        <TouchableOpacity
      onPress={()=>{
          navigation.navigate('HomeScreen');
      }}
      style={tw`bg-black py-5 px-1 m-20 rounded-full`}>
    <Text style={tw`text-center text-white text-xl font-semibold`}>Return Home</Text>
    
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})