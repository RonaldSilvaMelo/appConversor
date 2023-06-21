import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import ConverterScreen from './components/convesor';
import IMCScreen from './components/ImcScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="home" size={24} color={tintColor} />
        ),
      },
    },
    Converter: {
      screen: ConverterScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="calculator" size={24} color={tintColor} />
        ),
      },
    },
    IMC: {
      screen: IMCScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="body" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#35E169',
      inactiveTintColor: '#ccc',
      showLabel: false,
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
