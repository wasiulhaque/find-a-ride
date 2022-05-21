import { StyleSheet } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "461, Shewrapara, Mirpur, Dhaka"
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Banani, Dhaka"
  },
];

const NavFavourites = () => {
  return (
    <FlatList 
    data={data}
    keyExtractor={(item)=>item.id}
    renderItem={({item: {location, destination, icon}})=>{
      <TouchableOpacity>
        <Icon>
          style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          name={icon}
          type="ionicon"
          color='white'
          size={18}
        </Icon>
      </TouchableOpacity>
    }}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})