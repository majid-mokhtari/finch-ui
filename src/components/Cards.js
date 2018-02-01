import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const fbImage = 'https://graph.facebook.com/259389830744794/picture?height=500';
const reactImage = 'http://geekycentral.com/wp-content/uploads/2017/09/react-native.png';

class Cards extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image 
          style={{flex: 1}}
          source={{uri: reactImage}}
        />
        <View style={{margin: 20}}>
          <Text style={{fontSize: 28}} >Christine, 26</Text>
          <Text style={{fontSize: 15, color: 'darkgrey'}}>Alabama</Text> 
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

export default Cards;