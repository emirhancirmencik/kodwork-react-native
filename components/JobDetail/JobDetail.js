import { View, Text } from 'react-native';
import React from 'react';
import Styles from './JobDetail.styles';
import { WebView } from 'react-native-webview';

const JobDetail = props => {
  const job = props.route.params;
  const meta =
    '<meta name="viewport" content="width=device-width, initial-scale=1">';
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
    </View>
  );
};

export default JobDetail;
