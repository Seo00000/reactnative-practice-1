
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

class TODOAddScreen extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        num: 0,
      }
    }

    plus() {
        let num = this.state.num + 1;
        if(num == 10){
            this.props.navigation.navigate('Counter');
        }
    }
    
    render(){
        return(
            <Fragment>
                <SafeAreaView style={{flex:1, backgroundColor: "",}}>
                  <View style={styles.container}>
                      <Text>add</Text>
                      {/* <ButtonComponent
                        cssStyle={styles.button}
                        text="-"
                        onPress={()=> this.setState({ num: this.state.num - 1 })}
                      />
                      <Text style={styles.num}>{this.state.num}</Text>
                      <ButtonComponent
                        cssStyle={styles.button}
                        onPress={()=> this.setState({ num: this.state.num + 1 })}
                        text="+"
                      /> */}
                     
                     </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
    //   alignItems: "center",
      justifyContent: "space-between",
    //   paddingHorizontal: 30,
    },
    num: {
        fontSize: 40,
        fontWeight: "bold"
    }, 
    button: {
        backgroundColor: "lightgray",
        // padding: 20,
        width: 50,
        height: 50,
        justifyContent: "center",
        borderRadius: 50,
        margin: 10,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
    }
});

export default TODOAddScreen;