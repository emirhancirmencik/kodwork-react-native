import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

const Jobs = () => {
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
      <View style={Styles.card}>
        <Text style={Styles.cardHeader}>{item.name}</Text>
        <Text style={Styles.cardSubHeader}>{item.company.name}</Text>
        <View style={Styles.cardTextContainer}>
          <Text style={Styles.cardLocation}>{item.locations[0].name}</Text>
        </View>
        <Text style={Styles.cardLevel}>{item.levels[0].name}</Text>
      </View>
    );
  };

  console.log(data.results);

  return (
    <View style={Styles.container}>
      <FlatList
        style={Styles.list}
        data={data.results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Jobs;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  cardHeader: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  list: {
    paddingHorizontal: 15,
  },
  cardSubHeader: {
    fontSize: 15,
  },
  cardLocation: {
    fontWeight: '700',
    fontSize: 15,
    backgroundColor: '#bc5555',
    padding: 5,
    color: 'white',
    borderRadius: 15,
  },
  cardTextContainer: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  cardLevel: {
    color: '#bc5555',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'right',
  },
});
