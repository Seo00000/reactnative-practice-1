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

class TextInputComponent extends Component {
  constructor(props) {
    super(props);
  }

  // getKeyboardType = () => {
  //   // const keyboardType = this.props.keyboardType;
  //   const { keyboardType } = this.props;
  //   let result = "default";
  //   if(keyboardType) result = keyboardType;
  //   return result;
  // }

  render() {
    const { text, styleValue, onFocus, onBlur, onChangeText, value, secure, keyboardType } = this.props;
    return (
        <View>
          <Text>{text}</Text>
          <TextInput
              style={[styles.textInput, styleValue,]}
              onFocus={onFocus}
              onBlur={onBlur}
              onChangeText={onChangeText}
              value={value}
              secureTextEntry={secure}
              keyboardType={keyboardType}
              autoCapitalize='none'
          />
        </View>
    );
  }
}

TextInputComponent.defaultProps = {
  keyboardType: 'default',
};

const styles = StyleSheet.create({
    textInput: {
    // width: 100,
    alignSelf: "stretch",
    height: 30,
    borderWidth: 3,
    borderColor: "gray",
    marginBottom: 10,
    backgroundColor: "white",
    }
});

export default TextInputComponent;
