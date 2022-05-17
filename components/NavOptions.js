import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
const data = [
    {
        id: "123",
        title: "Find a Ride",
        image: "",
        screen: "",
    }
]
const NavOptions = () => {
  return (
    <FlatList
    data = {data}
    keyExtractor={(item) => item.id}
    horizontal
    renderItem = {({item}) => (
        <TouchableOpacity>
            <View>
                <Image
                style={{width: 120, height: 120, resizeMode: "contain"}} 
                source={{uri:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1569015390/assets/fa/0e26a9-9d9d-4190-ad6d-a879ccef4266/original/Select.png"}}
                />
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions;