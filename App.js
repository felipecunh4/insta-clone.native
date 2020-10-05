import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} />
      </SafeAreaView>
    );
  }
}

export default App;
