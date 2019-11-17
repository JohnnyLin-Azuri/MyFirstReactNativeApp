import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

export default class MyFirstReactNativeApp extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}>Hello, world!</Text>
        <Greeting name="Chewy" />
        <Greeting name="Bloomy" />
        <Greeting name="Bloody" />
        <Image
          source={pic}
          style={{width: 193, height: 110, alignSelf: 'center'}}
        />
        <Blink text="This text blinks." />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.red}>Hello, {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  componentDidMount() {
    // Toggle the state every second
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText,
        })),
      1000,
    );
  }

  //state object
  state = {isShowingText: true};

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text style={{textAlign: 'center'}}>{this.props.text}</Text>;
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
