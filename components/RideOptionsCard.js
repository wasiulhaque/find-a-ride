import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native'

const RideOptionsCard = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})