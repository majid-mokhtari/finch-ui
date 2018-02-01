import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Me from './src/images/me.jpeg';

const fbImage = 'https://graph.facebook.com/259389830744794/picture?height=500';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Image 
          style={{flex: 1}}
          source={Me}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8
  },
});
