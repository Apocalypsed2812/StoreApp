import React, {Component} from "react";
import {Text} from 'react-native'

import Login from '../components/Login';

export default class OrdersScreen extends Component{
    static navigationOptions = {
        title: 'Orders'
    }    
    render(){
        return <Login />
    }
}