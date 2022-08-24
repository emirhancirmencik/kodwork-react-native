import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Card from '../Card';
import Styles from './Jobs.styles';
import JobDetail from '../JobDetail/JobDetail';
const Jobs = props => {
  const { data, error, loading } = useFetch(
    Config.BASE_URL + 'jobs?page=' + '0' + '&api_key=' + Config.API_KEY,
  );

  if (error) {
    return (
      <View>
        <Text> {error}</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={Styles.container}>
        <ActivityIndicator size="large" color="#9a0007" />
      </View>
    );
  }

  const keyExtractor = item => {
    return item.id;
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => props.navigation.navigate('JobDetail', item)}>
        <Card item={item} />
      </Pressable>
    );
  };

  console.log(data.results);

  return (
    <View>
      <FlatList
        data={data.results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={Styles.list}
      />
    </View>
  );
};

export default Jobs;
