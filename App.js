import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(180),
      altAnimada: new Animated.Value(35),
    };

    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.state.larAnimada,
          {
            toValue: 230,
            duration: 700,
          }
        ),
        Animated.timing(
          this.state.larAnimada,
          {
            toValue: 180,
            duration: 700,
          }
        ),
      ])
    ).start()

  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{
          width: this.state.larAnimada,
          height: this.state.altAnimada,
          backgroundColor: '#4169E1',
          justifyContent: 'center',
          borderRadius: 25,
        }}>
          <Text style={{
            color: 'white',
            fontSize: 22,
            textAlign: 'center'
          }}>
            Carregando...
          </Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default App;
