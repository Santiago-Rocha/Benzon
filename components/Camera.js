import React from 'react';
import {StyleSheet ,Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Camera extends React.Component {
    static navigationOptions = {
        tabBarIcon: <Icon name='camera-retro' type='font-awesome' size={30} />
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Lo logramos amigos</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

