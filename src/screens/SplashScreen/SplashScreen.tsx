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

import ButtonComponent from '../../component/ButtonComponent'

class SplashScreen extends Component {
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ButtonComponent text={"Login"} onPress={() => this.props.navigation.navigate('Login')}/>
              <ButtonComponent text={"Register"} onPress={() => this.props.navigation.navigate('Register')}/>
            </View>
        );
    }
}

export default SplashScreen;