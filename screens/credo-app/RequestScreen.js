import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';

import { Ionicons as Icon } from '@expo/vector-icons';

export default class RequestScreen extends React.Component {

    // adding our home screen to the drawer navigation
    static navigationOptions = {
        drawerLabel: 'Request',
    };

    // method to navigate to loan history screen
    proceed() {
        const { navigate } = this.props.navigation
        navigate('PermissionScreen')
    }

    render() {
        return (
            <View style={styles.container}>
			<View style={styles.header}>
              <TouchableOpacity style={styles.innerHeader} onPress={() => {this.props.navigation.toggleDrawer();}}>
                <Icon name="md-menu" size={30} style={{color: '#ffffff'}}/>
              </TouchableOpacity>
			</View>
                <ScrollView style={styles.formBody}>
                    <View style={{ marginVertical: 10 }}></View>
                    <Text style={styles.formTitle}>Fill the form to apply for your loan.</Text>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>CODE</Text>
                        <View style={styles.input}>
                            <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                                <TextInput
                                    autoCorrect={false}
                                    keyboardType="default"
                                    style={{ fontSize: 20, paddingHorizontal: 10, minWidth: "100%" }}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>REQUEST NUMBER</Text>
                        <View style={styles.input}>
                            <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                                <TextInput
                                    autoCorrect={false}
                                    keyboardType="default"
                                    style={{ fontSize: 20, paddingHorizontal: 10, minWidth: "100%" }}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                />
                            </View>
                        </View>
                    </View>
                    <Button
                        onPress={() => this.proceed()}
                        title="PROCEEED WITH CREDIT ANALYSIS"
                        color="#1f618d"
                        accessibilityLabel="PROCEEED WITH CREDIT ANALYSIS BUTTON"
                    />
                </ScrollView>
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
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#1f618d',
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
    },
    formBody: {
        paddingHorizontal: 25,
        paddingBottom: 50,
        height: '100%'
    },
    label: {
        color: "#ACACAC"
    },
    formGroup: {
        marginBottom: 20,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f618d',
        textAlign: 'center'
    },
});