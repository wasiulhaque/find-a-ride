import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const data = [
  {
    id: "Regular",
    title: "Regular",
    multiplier: 1,
    image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png",
  },
  {
    id: "Premium",
    title: "Premium",
    multiplier: 1.2,
    image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png",
  },
  {
    id: "Moto",
    title: "Moto",
    multiplier: .5,
    image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png",
  },
]

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

      <FlatList
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item: {id, title, multiplier, image}, item})=>(
        <TouchableOpacity 
        onPress={()=>setSelected(item)}
        style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={{uri: image}}  
          />
           <View style={tw`-ml-6`}>
             <Text style={tw`text-xl font-semibold`}>{title}</Text>
             <Text>Travel Time</Text>
           </View>
           <Text style={tw`text-xl`}>100 BDT</Text>
        </TouchableOpacity>
      )}
      />
    <View>
      
    </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})