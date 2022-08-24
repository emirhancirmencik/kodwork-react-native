import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from '../components/Favorites';
import Wrapper from '../Wrapper';
import JobsRouter from './Jobs/JobsRouter';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Wrapper>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Jobs"
          component={JobsRouter}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </Wrapper>
  );
};

export default App;
