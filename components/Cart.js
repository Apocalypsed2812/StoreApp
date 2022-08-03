import React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import SkiiImage from '../assets/skii.png'

function Cart(props){
    const {cartProduct, onPress} = props
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.categoryImage} source={SkiiImage}/>
                <View style={styles.content}>
                  <Text style={styles.heading}>{cartProduct.name}</Text>
                  <Text style={styles.price}>{cartProduct.price}k</Text>
                </View>
                <View style={styles.control}>
                  <Text style={styles.sub}>-</Text>
                  <Text style={styles.quantity}>{cartProduct.quantity}</Text>
                  <Text style={styles.add}>+</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryImage:{
        width: 64,
        height: 64
    },
    content: {
     
    },
    heading:{
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8
    },
    price: {
      fontSize: 14,
      fontWeight: 400
    },
    control:{
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    quantity: {
      marginHorizontal: 8
    }
})

