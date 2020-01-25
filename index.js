import 'react-native-gesture-handler'
import React from 'react'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
console.disableYellowBox = true


class AppWrapper extends React.Component {
    render() {
        return (
          <PaperProvider theme={DefaultTheme}>
            <App />
          </PaperProvider>
        )
    }
}

AppRegistry.registerComponent(appName, () => AppWrapper)
