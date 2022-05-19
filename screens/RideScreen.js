import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectFair, selectTravelTimeInformation } from '../slices/navSlice'
import { SafeAreaView } from 'react-native-safe-area-context';



const RideScreen = () => {
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const fair = useSelector(selectFair);
    const timerRef = useRef(null);
    const countdownRef = useRef(null)

  return (
    <SafeAreaView>
      <Text>Ride Confirmed</Text>
      <Text>Ride Type: {fair.type}</Text>
      <Text>Travel Time: {travelTimeInformation.duration.text}</Text>
      <Text>Fair: {fair?.amount}</Text>
      
    </SafeAreaView>
  )
}

export default RideScreen

const styles = StyleSheet.create({
})