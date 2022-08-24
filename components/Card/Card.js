import { Pressable, Text, View } from 'react-native';
import React from 'react';
import Styles from './Card.styles.js';

const Card = ({ item, button }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.card}>
        <Text style={Styles.cardHeader}>{item.name}</Text>
        <Text style={Styles.cardSubHeader}>{item.company.name}</Text>
        <View style={Styles.cardTextContainer}>
          <Text style={Styles.cardLocation}>{item.locations[0].name}</Text>
        </View>
        <Text style={Styles.cardLevel}>{item.levels[0].name}</Text>
        {button && (
          <Pressable
            style={Styles.button}
            onPress={() => button.function(item)}>
            <Text style={Styles.btnText}> {button.text} </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Card;
