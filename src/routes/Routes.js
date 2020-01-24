import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen'


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
)

export default TabNavigator
