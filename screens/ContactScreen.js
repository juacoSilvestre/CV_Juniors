import React from 'react';
import {Text, StatusBar} from "react-native"

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact',
  };
  componentDidMount() {
    StatusBar.setHidden(true);
 }
  render() {

    return (
        <Text>Contact Screen</Text>
    )
  }
}
