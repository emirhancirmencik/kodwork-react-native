import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Jobs from '../../components/Jobs';
import JobDetail from '../../components/JobDetail/JobDetail';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const JobsRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobList"
        component={Jobs}
        options={{
          headerTitle: 'Jobs',
          headerTitleAlign: 'center',
          headerTitleStyle: styles.title,
        }}
      />
      <Stack.Screen name="JobDetail" component={JobDetail} />
    </Stack.Navigator>
  );
};

export default JobsRouter;

const styles = StyleSheet.create({
  title: { color: '#bc5555', fontWeight: '700' },
});
