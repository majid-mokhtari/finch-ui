import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Me from './src/images/we-asked-women-what-they-find-attractive-on-tinder-876-body-image-1469617144-size_1000.jpeg';

const fbImage = 'https://graph.facebook.com/259389830744794/picture?height=500';
const reactImage = 'http://geekycentral.com/wp-content/uploads/2017/09/react-native.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Image 
          style={{flex: 1}}
          source={{ uri: reactImage}}
        />
        <View style={{margin: 20}} >
          <Text style={{fontSize: 28}} >Christine, 26</Text>
          <Text style={{fontSize: 15, color: 'darkgrey'}} >Alabama</Text> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    overflow: 'hidden', 
    backgroundColor: 'white',
    margin: 10,
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8
  },
});
