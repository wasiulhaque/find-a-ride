import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import {useDispatch} from "react-redux";
import {setDestination, setOrigin} from "../slices/navSlice";
import NavFavourites from '../components/NavFavourites';


const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full py-15`}>
    <View style={tw`p-5`}>
      <Image
        style={{
            width: 132,
            height: 150,
            marginTop: 30,
            marginLeft: 0,
            resizeMode: "contain",
        }}
        source={{
            uri: "https://i.ibb.co/LQPDCzv/logo.png"
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
      {/* <NavFavourites/> */}
      <StatusBar style='auto'/>
    </View>
    
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})