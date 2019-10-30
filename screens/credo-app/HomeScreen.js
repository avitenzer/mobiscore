import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';

import { Ionicons as Icon } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  
  // adding our home screen to the drawer navigation
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  // method to navigate to loan history screen
  toRequest(){
    const { navigate } = this.props.navigation
    navigate('RequestNumber')
  }

  render() {
    return (
        <View style={styles.container}>
		<View style={styles.header}>
              <TouchableOpacity style={styles.innerHeader} onPress={() => {this.props.navigation.toggleDrawer();}}>
                <Icon name="md-menu" size={30} style={{color: '#ffffff'}}/>
              </TouchableOpacity>
        </View>
          
          <View style={styles.welcome}>
            <View style={{marginVertical: 5}}></View>
            <Text style={styles.welcomeMsg}>Please choose the identifier option</Text>
            <View style={{ marginVertical: 25 }}></View>
            <TouchableHighlight onPress={() => this.toRequest()}>
              <View style={styles.loanHistory}>
                    <Text style={{color: '#1f618d'}}>RECORD NUMBER</Text>
              </View>
            </TouchableHighlight>
            <View style={{ marginVertical: 15 }}></View>
            <TouchableHighlight onPress={() => this.toRequest()}>
              <View style={styles.loanHistory}>
                    <Text style={{color: '#1f618d'}}>PHONE NUMBER</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#1f618d'
  },
  innerHeader: {
    padding: 20,
  },
  welcomeMsg: {
    padding: 15,
    fontSize: 24,
    textAlign: 'center',
    color: '#1f618d'
  },
  loanHistory: {
    backgroundColor: '#3094cf',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});