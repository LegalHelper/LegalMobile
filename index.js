import 'react-native-gesture-handler'
import React from 'react'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
console.disableYellowBox = true


class AppWrapper extends React.Component {
    render() {
        return (
            <App />
        )
    }
}

AppRegistry.registerComponent(appName, () => AppWrapper)
