import { View, Text, Image, } from 'react-native'
import React from 'react'

const ItemArr = ({ item }) => {
    return (
        <View  style={{ flexDirection: 'row', justifyContent:'space-around', padding:10, borderWidth:1, width:'100%',height:70, alignItems:'center', marginBottom:5, borderRadius: 10}}>
            
            <Image  style={{width:50, height: 50, borderRadius:25}} source={{uri:item.photo}} />
            <View style={{alignItems:'center'}}>  

                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
            </View>
            <Text style={{color:'green'}}>
                    Call
            </Text>
        </View>
    )
}

export default ItemArr