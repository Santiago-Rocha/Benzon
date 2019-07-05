import React from 'react';
import { Text, View} from 'react-native';
import { Icon } from 'react-native-elements'

export default class Album extends React.Component {
    static navigationOptions = {
        tabBarIcon: <Icon name='image' type='font-awesome' size={30} />
    };
    render(){
      return(
        <View >
          <Text>Lo logramos amigos</Text>
        </View>
      )
    }
  }