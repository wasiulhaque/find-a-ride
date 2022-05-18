import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
const dispatch = useDispatch();
const navigation = useNavigation();
    
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-1 text-xl`}>Greetings</Text>
        <View style={tw`flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                placeholder='Where To?'
                styles={toInputBoxStyles}
                fetchDetails={true}
                enablePoweredByContainer={false}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null)=>{
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    }));

                    navigation.navigate("RideOptionsCard");
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en",
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                />
            </View>
        </View>
        <View style={tw`flex-row bg-white justify-evenly py-8 mt-auto border-t border-gray-100`}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('RideOptionsCard')}
            style={tw`flex  justify-evenly bg-black w-50 h-20 px-4 py-3 rounded-full`}>
                <Icon name='car' type='font-awesome' color='white' size={16} />
                <Text style={tw`text-white text-center`}>Find a Ride</Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 10,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});