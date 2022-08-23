import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Jobs from './components/Jobs';
import Favorites from './components/Favorites';
import Wrapper from './Wrapper';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Wrapper>
      <Drawer.Navigator>
        <Drawer.Screen name="Jobs" component={Jobs} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </Wrapper>
  );
};

export default App;

const styles = StyleSheet.create({ container: { backgroundColor: 'red' } });
