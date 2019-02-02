import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MapView } from 'expo';
export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact',
    header: null,
  };
  componentDidMount() {
    StatusBar.setHidden(true);
 }
  render() {

    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Image source={require("../assets/images/cvjContacto.jpeg")} resizeMethod={"scale"} resizeMode={"stretch"} style={styles.imagePrin}/>
        <View style={styles.welcomeContainer}>
        <MapView
        style={{ flex: 1 , padding:50+"%",height:30+"%"}}
        initialRegion={{
          latitude: -31.4188144,
          longitude: -64.1703071,
          latitudeDelta: 0.005,
          longitudeDelta: 0.004,
        }}
      />
      <MapView.Maker 
      coordinate={{
        latitude: -31.4188144,
          longitude: -64.1703071,
      }}/>
        </View>
      </ScrollView>
      
      </View>
    )
  }
}
const styles = StyleSheet.create({
  imagePrin:{
    width:100+"%",
    height:50+"%",
    padding:50+"%",    
 },
 container: {
  flex: 1,
  backgroundColor: '#fff',
},
contentContainer: {
  paddingTop: 30,
},
welcomeContainer: {
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 20,
},
});