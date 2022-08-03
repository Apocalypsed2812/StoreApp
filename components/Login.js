import React from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native'

import SkiiImage from '../assets/skii.png'

function Login(props){
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput
              style={styles.username}
              //onChangeText={onChangeText}
              value={"Nhập username"}
            />
            <TextInput
              style={styles.password}
              //onChangeText={onChangeText}
              value={"Nhập password"}
            />
            <Button
              style={styles.button}
              title="Đăng Nhập"
              onPress={() => Alert.alert('Xử lý đăng nhập')}
            />
            <Text style={styles.register}>Chưa có tài khoản? Đăng kí</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 16,
        justifyContent: 'center',
        flex: 1
    },
    heading: {
      fontSize: 30,

    },
    username: {
      height: 40,
      margin: 12,
      width: 300,
      borderWidth: 1,
      padding: 10,
    },
    password: {
      height: 40,
      margin: 12,
      width: 300,
      borderWidth: 1,
      padding: 10, 
    },
    button: {
      width: 300,
    },
    register: {
      marginTop: 8,
    }
})

