// import React, { Component } from 'react';

import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  TextInput,
  AsyncStorage
} from 'react-native';
import styles from './styles';
import * as ImagePicker from "react-native-image-picker"
export default class Component extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      name2:'',
    };
    
  }
  
  onChangeText = async text => {
    await this.setState({ name: text });
  };
  
 onSave = async () => {
  const { name } = this.state;
  await AsyncStorage.setItem('USER',name);
  // this.props.navigation.state.params.OpenCamera.setState({'name2': name});
  this.props.navigation.goBack()
  // this.props.navigation.push('OpenCamera')

 }
  
  render() {
    const { name,name2 } = this.state;

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.body}>
            <Text>{name2}</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => this.onChangeText(text)}
                value={name}
                placeholder="nama"
              />           
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                this.onSave()
              }}>
                <Text style={styles.textButton}>Simpan </Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

