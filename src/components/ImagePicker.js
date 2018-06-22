import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';
 
import ImagePicker from 'react-native-image-picker';
 
class ImagePickerExample extends Component {
  
    state = {
 
      ImageSource: null,
    
    };
  
    selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
  
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
  
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
          this.setState({
 
            ImageSource: source
 
          });
        }
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
 
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={styles.ImageContainer}>
            { this.state.ImageSource === null ? <Text>Select a Photo</Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
            }
            </View>
          </TouchableOpacity>
 
        </View>
      );
    }
  
  }
  
  const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#007aff',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 5
    },
 
    ImageContainer: {
      borderRadius: 10,
      width: 250,
      height: 250,
      borderColor: '#007aff',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#007aff',
      
    },
 
  });
 
export default ImagePickerExample;