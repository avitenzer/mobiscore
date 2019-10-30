import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';

import ApplyScreen from './screens/ApplyScreen';
import BvnScreen from './screens/BvnScreen';
import HistoryScreen from './screens/HistoryScreen';
import ChargeScreen from './screens/ChargeScreen';
import AccountScreen from './screens/AccountScreen';

import HomeScreen from './screens/credo-app/HomeScreen';
import RequestScreen from './screens/credo-app/RequestScreen';
import PermissionScreen from './screens/credo-app/PermissionScreen';

const RootStack  = createDrawerNavigator({
  RequestScreen: { screen: RequestScreen },
  PermissionScreen: { screen: PermissionScreen },
  LoanHomeScreen: {screen: LoanHomeScreen},
  ApplyScreen: {screen: ApplyScreen},
  BvnScreen: {screen: BvnScreen},
  HistoryScreen: {screen: HistoryScreen},
  ChargeScreen: {screen: ChargeScreen},
  AccountScreen: { screen: AccountScreen }
},
    {
      initialRouteName: 'ApplyScreen'
    });


const App = createAppContainer(RootStack);

export default App;