import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import startTabs from './MainTab/startMainTab';

export default class Auth extends Component {
    loginHandler = () => {
        startTabs();
    }

    render() {
        return (
             <View>
                <Text> Auth screen </Text>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        )
    }
}
