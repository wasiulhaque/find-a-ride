import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import {useDispatch} from "react-redux";
import {setDestination, setOrigin} from "../slices/navSlice";


const HomeScreen = () => {
  const dispatch = useDispatch();
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

<GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
             dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
         fetchDetails={true}
          returnKeyType={'search'}
          enablePoweredByContainer={false}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        <View style={{ marginBottom: 40 }}></View>

      <NavOptions/>
      <StatusBar style='auto'/>
    </View>
    
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})