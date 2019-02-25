import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Linking,
  WebView
} from 'react-native';
import { MapView } from 'expo';
export default class ContactScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMapReady: false,
      
    }
  }

  static navigationOptions = {
    title: 'Contact',
    header: null,
  };
  componentDidMount() {
    StatusBar.setHidden(true);
 }
 
 onMapLayout = () => {
  this.setState({ isMapReady: true });
}

  render() {

    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
     
      <Image source={require("../assets/images/cvjContacto.jpeg")} resizeMethod={"scale"} resizeMode={"stretch"} style={styles.imagePrin}/>
      <View style={styles.welcomeContainer}>
         <Text style={styles.whatsapp} onPress={() => {Linking.openURL(`whatsapp://send?text=${""}&phone=${5493515645975}`);}}>
            </Text>  
      </View>

      <View style={styles.welcomeContainer}>
         <Text style={styles.facebook} onPress={() => {Linking.openURL(`https://www.facebook.com/CVJuniors/`);}}>
            </Text>
      </View>
      <View style={styles.welcomeContainer}>
         <Text style={styles.instagram} onPress={() => {Linking.openURL(`https://www.instagram.com/cvjuniors/`);}}>
            </Text>
      </View>
      
        <View style={styles.welcomeContainer}>
       
          <View style={{padding:2+"%",width:100+"%", backgroundColor: 'hsl(120, 60%, 70%)', flex:1, top:-135+"%"}}>
          <Text style={styles.text}>Apreta el icono de la red social con la cual te desees comunicar</Text>
            <Text style={styles.text}>Encontranos, te esperamos!</Text>
          </View> 

        <MapView
        style={{ flex: 1 , padding:50+"%",height:100+"%",width:100+"%",top:-135+"%"}}
        initialRegion={{
          latitude: -31.4188144,
          longitude: -64.1703071,
          latitudeDelta: 0.005,
          longitudeDelta: 0.004,
        }}
        onLayout={this.onMapLayout}
        >
                { this.state.isMapReady &&<MapView.Marker
            coordinate={{latitude: -31.418716,
            longitude: -64.1705863}}
            title={"Centro Vecinal de Barrio Juniors"}
            //description={"description"}
         />}
        </MapView>
        </View>

      
      </ScrollView>
      
      </View>
    )
  }
}
const styles = StyleSheet.create({
  instagram:{
    padding:0,
    width:46+"%",
    height:21+"%",
    position:"relative",
    top:-282+"%",
    left:25+"%",
    
  },
  facebook:{
    width:46+"%",
    height:21+"%",
    position:"relative",
    top:-145 +"%",
    left:-25+"%",
  },
  whatsapp:{
    padding:0,
    width:46+"%",
    height:21+"%",
    position:"relative",
    top:-50+"%",
    left:-25+"%",

  },
  text:{
    textAlign:"center",
    fontFamily: "against_modern_football",
    }
  ,
  imagePrin:{
    width:100+"%",
    height:20+"%",
    padding:35+"%",    
 },
 container: {
  flex: 1,
  backgroundColor: '#fff',
},
contentContainer: {
  paddingTop: 3+"%",
},
welcomeContainer: {
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 20,
},
});