import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { color } from 'react-native-reanimated';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cssStyle, onPress, text, disabled } = this.props;
    return (
      <TouchableOpacity 
        style={cssStyle ? cssStyle : styles.button}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={disabled ? styles.disabledButton : ""}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 3,
    margin: 2,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center"
  },
  disabledButton: {
    color: "gray",
  }
});

export default ButtonComponent;
