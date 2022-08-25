import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import { removeFavorite } from '../../redux/favoritesSlice/favoritesSlice';

const Favorites = props => {
  const favorites = useSelector(state => state.favorites.list);
  const dispatch = useDispatch();

  const keyExtractor = item => {
    return item.id;
  };

  function handleRemove(item) {
    dispatch(removeFavorite(item));
  }

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => props.navigation.navigate('JobDetail', item)}>
        <Card item={item} button={{ text: 'Remove', function: handleRemove }} />
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        data={favorites}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={Styles.list}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Favorites;
