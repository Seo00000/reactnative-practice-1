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

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      pw: '',
      pwCheck: '',
      confirmColorEmail: 'gray',
      confirmColorPw: 'gray',
      confirmText: '',
      disableButton: true,
    };
  }

  onChangeEmail(email: Text) {
    this.setState({id: email});

    if (!emailCheck(email)) {
      this.setState({confirmColorEmail: 'red'});
    } else {
      this.setState({confirmColorEmail: 'blue'});
    }
  }

  async onChangePw(pw: Text, flag: Text) {
    await this.setState({[flag]: pw});

    const pwValue = this.state.pw;
    const pwCheckValue = this.state.pwCheck;

    //둘 다 값이 존재할때
    if (pwValue != '' && pwCheckValue != '') {
      //값이 같지 않으면
      if (pwValue != pwCheckValue) {
        this.setState({confirmText: '패스워드와 확인란이 일치하지 않습니다.'});
      } else {
        //두 칸의 값이 일치하면
        //길이 8글자 이상인지 확인하기
        if (pwValue.length < 8) {
          this.setState({confirmText: '패스워드를 8글자 이상 입력해주세요.'});
        } else {
          let reg1 = /[0-9]/;
          let reg2 = /[a-z]/;
          let reg3 = /[A-Z]/;
          let reg4 = /[~!@#$%^&*()_+|<>?:{}]/;
          let ch_cnt = 0;

          if (reg1.test(pwValue)) {
            ch_cnt++;
          }
          if (reg2.test(pwValue)) {
            ch_cnt++;
          }
          if (reg3.test(pwValue)) {
            ch_cnt++;
          }
          if (reg4.test(pwValue)) {
            ch_cnt++;
          }

          //3가지 이상 포함여부
          if (ch_cnt < 3) {
            this.setState({
              confirmText:
                '패스워드에는 대문자/소문자/숫자/특수문자 중 3가지 이상 포함되어야 합니다.',
            });
          } else {
            this.setState({confirmText: ''});
            this.setState({disableButton: false});
          }
        }
      }
    }
  }

  getData = async () => {
    try {
      const getValue = await AsyncStorage.getItem('@user');
      return getValue != null ? getValue : null;
    } catch (e) {
      console.log(e);
    }
  };

  onSubmit = async () => {
    let getData: any = await this.getData();
    // if(getData == null){
    //     getData = new Array();
    // }
    // console.log(typeof(getData));
    // console.log(getData);
    // if(getData != null && getData != undefined){
    const id = this.state.id;
    const pw = this.state.pw;
    let isExist;
    if (getData == null) {
      getData = [];
      isExist = null;
    } else {
      getData = JSON.parse(getData);
      isExist = getData.find((data) => data.id === id);
    }

    console.log(getData);
    console.log(isExist);
    //가입되어있지 않으면
    if (isExist === undefined || isExist === null) {
      let user;

      getData.push({id: id, pw: pw});
      user = JSON.stringify(getData);

      console.log(user);

      try {
        // const user = JSON.stringify(getData);
        await AsyncStorage.setItem('@user', user);
        Alert.alert('가입되었습니다.');
        this.props.navigation.navigate('Splash');
      } catch (e) {
        console.log(e);
      }
    } else {
      this.setState({id: ''});
      this.setState({pw: ''});
      this.setState({pwCheck: ''});
      Alert.alert('이미 가입되어 있는 이메일입니다.');
    }
    // }
  };

  render() {
    return (
      <Fragment>
        <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
          <View style={styles.container}>
            <TextInputComponent
              text="아이디(이메일 형식)"
              styleValue={{borderColor: this.state.confirmColorEmail}}
              // styleValue={{borderColor: this.state.confirmColor}, {backgroundColor: "white"}}
              onFocus={() => {}}
              onBlur={() => {}}
              onChangeText={(text) => this.onChangeEmail(text)}
              value={this.state.id}
              keyboardType={'email-address'}
            />
            <TextInputComponent
              text="비밀번호"
              styleValue={{borderColor: this.state.confirmColorPw}}
              // onFocus={() => {}}
              // onBlur={() => {}}
              onChangeText={(text) => this.onChangePw(text, 'pw')}
              value={this.state.pw}
              secure={true}
            />
            <TextInputComponent
              text="비밀번호 확인"
              styleValue={{borderColor: this.state.confirmColorPw}}
              // onFocus={() => {}}
              // onBlur={() => {}}
              onChangeText={(text) => this.onChangePw(text, 'pwCheck')}
              value={this.state.pwCheck}
              secure={true}
            />
            <Text>{this.state.confirmText}</Text>
            <ButtonComponent
              text={'가입하기'}
              disabled={
                this.state.confirmColorEmail && this.state.disableButton
                  ? true
                  : false
              }
              onPress={() => this.onSubmit()}
            />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

// function emailCheck(email:Text) {
//   const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,6}$/i;
//   return reg.test(email);
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
});

export default RegisterScreen;
