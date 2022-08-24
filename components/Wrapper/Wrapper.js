import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '../../redux/store';

export default function Wrapper(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>{props.children}</NavigationContainer>
    </Provider>
  );
}
