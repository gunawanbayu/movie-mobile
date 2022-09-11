

import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  AsyncStorage,
  RefreshControl,
  ScrollView
} from 'react-native';
import styles from './styles';
import * as ImagePicker from "react-native-image-picker"
export default class Component extends React.Component {
  constructor(props){
    super(props)
    this.state={
      fileUri:'https://bootdey.com/img/Content/avatar/avatar6.png',
      name2:'',
      refreshing:false,
    };
  }
  componentDidMount = async () => {
    
    this.updateName()

  };
  _onRefresh = async () => {
    this.setState({ refreshing: true });
    this.updateName()
  };
  componentDidUpdate= async ()=>{
  }
  updateName = async () => {
    this.setState({name2:await AsyncStorage.getItem('USER'),refreshing: false})
  }
  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    const cameraPermission = PermissionsAndroid.PERMISSIONS.CAMERA;
    const storagePermission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.assets[0].uri
        });
      }
      PermissionsAndroid.check(cameraPermission).then(cameraStatus => {
        if (cameraStatus === false) {
          Alert.alert('', 'permission camera belum aktif');
        } else {
          ImagePicker.launchCamera(options, response => {
            if (!response.error && !response.didCancel) {
              this.setState({
                filePath: response,
                fileData: response.data,
                fileUri: response.assets[0].uri
              });
            }
          });
        }
      });
    });

  }
  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.assets[0].uri
        });
      }
    });

  }
  render() {
    const { fileUri,name2,refreshing } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this._onRefresh} />}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: fileUri}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <View style={styles.buttonContainer} >
                <Text style={styles.textButton}>Hello.{name2}</Text>  
              </View>              
              
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                this.launchCamera();
              }}>
                <Text style={styles.textButton}>Buka Camera</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                this.launchImageLibrary()
              }}>
                <Text style={styles.textButton}>Buka Galeri </Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                this.props.navigation.navigate('EditProfile');
                
              }}>
                <Text style={styles.textButton}>Ubah Nama </Text> 
              </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

