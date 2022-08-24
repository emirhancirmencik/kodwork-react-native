import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import JobDetail from '../../components/JobDetail/JobDetail';
import { StyleSheet } from 'react-native';
import Favorites from '../../components/Favorites';

const Stack = createNativeStackNavigator();

const FavoritesRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesList"
        component={Favorites}
        options={{
          headerTitle: 'Favorites',
          headerTitleAlign: 'center',
          headerTitleStyle: styles.title,
        }}
      />
      <Stack.Screen name="JobDetail" component={JobDetail} />
    </Stack.Navigator>
  );
};

export default FavoritesRouter;

const styles = StyleSheet.create({
  title: { color: '#bc5555', fontWeight: '700' },
});
