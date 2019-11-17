/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';

export default class MyFirstReactNativeApp extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, world!</Text>
        <Greeting name="Chewy" />
        <Greeting name="Bloomy" />
        <Greeting name="Bloody" />
        <Image source={pic} style={{width: 193, height: 110}} />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello, {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  componentDidMount() {
    // Toggle the state every second
    setInterval(
      () =>(
        this.setState(previousState => ({
       isShowingText: !previousState.isShowingText }))
  ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}