import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './src/pages/LoginScreen'

const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen
  },
},
  {
    defaultNavigationOptions: {
      title: 'Series!',

      headerTintColor: 'white',
      
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },

      headerTitleStyles: {
        color: 'white'
      }
    }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer