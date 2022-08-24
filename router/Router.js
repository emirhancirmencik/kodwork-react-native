import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Wrapper from '../components/Wrapper/Wrapper';
import JobsRouter from './Jobs/JobsRouter';
import FavoritesRouter from './Favorites/FavoritesRouter';

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
          component={FavoritesRouter}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </Wrapper>
  );
};

export default App;
