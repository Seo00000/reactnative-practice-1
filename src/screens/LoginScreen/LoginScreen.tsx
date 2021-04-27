import AsyncStorage from '@react-native-async-storage/async-storage';
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

import TextInputComponent from '../../component/TextInputComponent';
import ButtonComponent from '../../component/ButtonComponent';
import emailCheck from '../../utils/checkEmailVerified';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      pw: '',
      confirmColorEmail: 'gray',
      focusPw: '',
      // focus: {
      //   id: false,
      //   pw: false,
      // },
      // text: {
      //   id: "아이디",
      //   pw: "비밀번호",
      // },
    };;
  }

  // onPress(obj) {
  //   for(let key in obj){
  //     console.log(key + ' : ' + obj.[key]);
  //   }
  // }

  onChangeEmail(email: Text) {
    this.setState({id: email});

    if (!emailCheck(email)) {
      this.setState({confirmColorEmail: 'red'});
    } else {
      this.setState({confirmColorEmail: 'blue'});
    }
  }

  // renderInputText(obj){
  //   let focusCheck = obj.focus ? "black" : "gray";
  //   return <TextInput
  //     style={[styles.textInputId, {borderColor: focusCheck}]}
  //     onFocus={() => obj.onFocus()}
  //     onBlur={() => obj.onBlur()}
  //     onChangeText={(txt) => obj.onChangeText(txt)}
  //     placeholder={obj.text}
  //   />
  // }

  getData = async () => {
    try {
      const getValue = await AsyncStorage.getItem('@user');
      return getValue != null ? getValue : null;
    } catch (e) {
      console.log(e);
    }
  };

  onSubmit = async () => {
    // await AsyncStorage.setItem('@user', "");
    let getData = await this.getData();
    let isExist;
    const id = this.state.id;
    const pw = this.state.pw;

    //회원이 아무도 없을때
    if (getData == null) {
      getData = [];
      Alert.alert('해당 아이디가 존재하지 않습니다.');
    } else {
      getData = JSON.parse(getData);
      isExist = getData.find((data) => data.id === id);
      // 주석 처리한 하단의 map 함수를 쓰면 해당 속성 값만 추출할 수 있다.
      // isExist = getData.find(data => data.id === id).map(data => data.pw);

      //입력한 아이디(이메일)에 대한 회원정보가 없을 때
      if (isExist === undefined || isExist === null) {
        Alert.alert('해당 아이디가 존재하지 않습니다.');
      } else {
        const pwCheck = pw === isExist.pw ? true : false;
        if (!pwCheck || isExist === null) {
          Alert.alert('비밀번호가 일치하지 않습니다.');
        } else {
          this.setState({id: ''});
          this.setState({pw: ''});
          this.setState({confirmColorEmail: 'gray'});
          this.props.navigation.navigate('Counter');
        }
      }
    }
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>
          <View style={styles.container}>
            {/* {this.renderInputText({ focus: this.state.focus.id,
            onFocus: () => this.setState({ focus: {id: true} }),
            onBlur: () => this.setState({ focus: {id: false} }),
            onChangeText: (txt) => this.setState({ text: {id: txt, pw: this.state.text.pw} }),
            text: this.state.text.id,
          })}
          {this.renderInputText({ focus: this.state.focus.pw,
            onFocus: () => this.setState({ focus: {pw: true} }),
            onBlur: () => this.setState({ focus: {pw: false} }),
            onChangeText: (txt) => this.setState({ text: {pw: txt, id: this.state.text.id} }),
            text: this.state.text.pw,
          })} */}
            <TextInputComponent
              text="아이디(이메일 형식)"
              styleValue={{borderColor: this.state.confirmColorEmail}}
              // styleValue={{borderColor: this.state.confirmColor}, {backgroundColor: "white"}}
              onFocus={() => this.setState({focus: {id: true}})}
              onBlur={() => this.setState({focus: {id: false}})}
              onChangeText={(text) => this.onChangeEmail(text)}
              value={this.state.id}
              keyboardType={'email-address'}
            />
            <TextInputComponent
              text="비밀번호"
              // styleValue={{borderColor: this.state.confirmColorPw}}
              onFocus={() => this.setState({focusPw: true})}
              onBlur={() => this.setState({focusPw: false})}
              // onChangeText={(text) => this.onChangePw(text, "pw")}
              onChangeText={(txt) => this.setState({pw: txt})}
              value={this.state.pw}
              secure={true}
            />
            <ButtonComponent
              text={'로그인'}
              disabled={this.state.confirmColorEmail != 'blue' ? true : false}
              onPress={() => this.onSubmit()}
            />
            {/* <TouchableOpacity style={[styles.textWraping]} onPress={() => this.onPress(this.state.text)}>
            <Text>
              확인
            </Text>
          </TouchableOpacity> */}
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 30,
  },,
});

export default LoginScreen;

