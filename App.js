import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './Redux_Toolkit/store';
import Home from './Home';
import List from './List';
import Detail from './Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Details" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
