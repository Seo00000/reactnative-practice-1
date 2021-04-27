import 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component, Fragment} from 'react';
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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen/SplashScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterScreen/RegisterScreen';
import CounterScreen from './CounterScreen/CounterScreen';
import TODOAddScreen from './TODOScreen/TODOAddScreen';
import TODOListScreen from './TODOScreen/TODOListScreen';

const Stack = createStackNavigator();

class AppStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{title: 'Main'}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{title: 'Register'}}
          />
          <Stack.Screen
            name="Counter"
            component={CounterScreen}
            options={{title: 'Counter'}}
          />
          <Stack.Screen
            name="TODOAdd"
            component={TODOAddScreen}
            options={{title: 'TODO-ADD'}}
          />
          <Stack.Screen
            name="TODOList"
            component={TODOListScreen}
            options={{title: 'TODO-List'}}
          />
          {/* <Stack.Screen name="Details" component={DetailsScreen}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppStack;
