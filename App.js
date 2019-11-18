import React, {Component} from 'react';
import {
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class MyFirstReactNativeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', translated: ''};
  }
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
        <Blink text="This text doesn't blink anymore." />
        <TextInput
          placeholder="type something..."
          value={this.state.text}
          onChangeText={text => this.setState({text})}
        />
        <Text>What you wrote: {this.state.text}</Text>
        <Button
          onPress={() => {
            //alert('This button doesn\'t work yet');
            this.setState(
              state =>
                (this.state.translated = "Sadly, I don't know French yet..."),
            );
            //Might be a good idea to use an api call to translate for fun
          }}
          title="Translate EN to FR"
        />
        <Text>{this.state.translated}</Text>
        <ScrollView>
          <Text>From here on is a ScrollView.</Text>
          <Greeting name="Chewy" />
          <Greeting name="Bloomy" />
          <Greeting name="Bloody" />
          <Greeting name="Chewy" />
          <Greeting name="Bloomy" />
          <Greeting name="Bloody" />
          <Greeting name="Chewy" />
          <Greeting name="Bloomy" />
          <Greeting name="Bloody" />
          <Greeting name="Chewy" />
          <Greeting name="Bloomy" />
          <Greeting name="Bloody" />
        </ScrollView>
        <View>
          <Text>Another View</Text>
        </View>
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
    /*setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText,
        })),
      1000,
    );*/
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
