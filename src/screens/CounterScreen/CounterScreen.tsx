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

import ButtonComponent from '../../component/ButtonComponent';

class CounterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }

  plus() {
    let numVal = this.state.num + 1;
    this.setState({num: numVal});

    if (numVal >= 10) {
      this.props.navigation.navigate('TODOAdd');
    }
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView style={{flex: 1, backgroundColor: ''}}>
          <View style={styles.container}>
            <ButtonComponent
              cssStyle={styles.button}
              text="-"
              onPress={() => this.setState({num: this.state.num - 1})}
            />
            <Text style={styles.num}>{this.state.num}</Text>
            <ButtonComponent
              cssStyle={styles.button}
              onPress={() => this.plus()}
              text="+"
            />
            {/* <TextInputComponent
                        text="아이디(이메일 형식)"
                        styleValue={{borderColor: 'black'}, {backgroundColor: "white"}}
                        onFocus={() => {}}
                        onBlur={() => {}}
                        onChangeText={() => {}}
                        value={this.state.id}
                    />
                    <TextInputComponent
                        text="비밀번호"
                        styleValue={{borderColor: 'black'}, {backgroundColor: "white"}}
                        onFocus={() => {}}
                        onBlur={() => {}}
                        onChangeText={() => {}}
                        value={this.state.pw}
                    />
                    <TextInputComponent
                        text="비밀번호 확인"
                        styleValue={{borderColor: 'black'}, {backgroundColor: "white"}}
                        onFocus={() => {}}
                        onBlur={() => {}}
                        onChangeText={() => {}}
                        value={this.state.pwCheck}
                    />
                    <ButtonComponent text={"가입하기"} onPress={() => this.props.navigation.navigate('Splash')}/> */}
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //   paddingHorizontal: 30,
  },
  num: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'lightgray',
    // padding: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
});

export default CounterScreen;
