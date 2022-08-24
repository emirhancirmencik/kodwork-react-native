import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import Styles from './JobDetail.styles';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/favoritesSlice/favoritesSlice';
import { useSelector } from 'react-redux';

const JobDetail = props => {
  const job = props.route.params;
  const meta =
    '<meta name="viewport" content="width=device-width, initial-scale=1">';
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites.list);
  const [inFavorite, setInfavorite] = useState(
    favorites.findIndex(favorite => favorite.id === job.id) === -1
      ? false
      : true,
  );

  const handleFavorite = item => {
    if (!inFavorite) {
      dispatch(addFavorite(item));
      setInfavorite(true);
    }
  };

  const handleRemove = item => {
    if (inFavorite) {
      dispatch(removeFavorite(item));
      setInfavorite(false);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>{job.name}</Text>
        <View style={Styles.subheader}>
          <Text style={[Styles.subTitle, Styles.myColor]}>Locations: </Text>
          <Text style={Styles.subTitle}>{job.locations[0].name}</Text>
        </View>
        <View style={Styles.subheader}>
          <Text style={[Styles.subTitle, Styles.myColor]}>Job Level: </Text>
          <Text style={Styles.subTitle}>{job.levels[0].name}</Text>
        </View>
      </View>
      <View style={Styles.contents}>
        <WebView
          source={{
            html: meta + job.contents,
          }}
        />
      </View>
      <View style={Styles.btnContainer}>
        <Pressable style={Styles.btn} onPress={() => handleFavorite(job)}>
          <View>
            <Icon name="enter" size={25} color="white" />
          </View>
          <Text style={Styles.btnText}>Submit</Text>
        </Pressable>
        {!inFavorite && (
          <Pressable style={Styles.btn} onPress={() => handleFavorite(job)}>
            <View>
              <Icon name="heart" size={25} color="white" />
            </View>
            <Text style={Styles.btnText}>Favorite Job</Text>
          </Pressable>
        )}
        {inFavorite && (
          <Pressable style={Styles.btn} onPress={() => handleRemove(job)}>
            <View>
              <Icon name="trash" size={25} color="white" />
            </View>
            <Text style={Styles.btnText}>Remove from Favorites</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default JobDetail;
