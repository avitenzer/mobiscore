import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight,ListView  } from 'react-native';

import { Ionicons as Icon } from '@expo/vector-icons';


export default class PermissionScreen extends React.Component {

    // adding our home screen to the drawer navigation
    static navigationOptions = {
        drawerLabel: 'Permissions',
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }).cloneWithRows(['Contacts', 'Call', 'SMS', 'Calendars', 'External Storage', 'Gmail']),
        };
    }

    renderRow(data) {
        return (
            <Text>{`\u2022 ${data}`}</Text>
        );
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
                    <Text>
                        Mobiscore uses an innovative statistical methodology to improve your ability to receive a loan. This app is designed to only access anonymous data to calculate your credit report. To do so we require you to grant access to the information below:
                    </Text>
                    <View style={{ marginVertical: 10 }}></View>
                    <View>
                        <ListView
                            style={{ margin: 40 }}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow}
                        />
                    </View>
                    <Button
                        title="NEXT"
                        color="#1f618d"
                        accessibilityLabel="NEXT BUTTON"
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