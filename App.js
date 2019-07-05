import { StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Camera from './components/Camera'
import Add from './components/Add'
import Album from './components/Album'
import Schedule from './components/Schedule'


const MainNavigator = createBottomTabNavigator(
  {
    Album: {screen: Album},
    Schedule: {screen: Schedule},
    Add: {screen: Add},
    Camera: {screen: Camera},
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
