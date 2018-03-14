// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image} from 'react-native';

const fbImage = 'https://graph.facebook.com/259389830744794/picture?height=500';
// const reactImage = 'http://geekycentral.com/wp-content/uploads/2017/09/react-native.png';

// class Cards extends Component {
//   render() {
//     return (
//       <View style={styles.card}>
//         <Image 
//           style={{flex: 1}}
//           source={{uri: fbImage}}
//         />
//         <View style={{margin: 20}}>
//           <Text style={{fontSize: 28}} >Christine, 26</Text>
//           <Text style={{fontSize: 15, color: 'darkgrey'}}>Alabama</Text> 
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   card: {
//     flex: 1,
//     overflow: 'hidden', 
//     backgroundColor: 'white',
//     margin: 10,
//     marginTop: 100,
//     marginBottom: 100,
//     borderWidth: 1,
//     borderColor: 'grey',
//     borderRadius: 8
//   },
// });

// export default Cards;

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: fbImage,
  },
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: item.image}} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image 
                    style={{ height: 300, flex: 1 }} 
                    source={{uri: item.image}} 
                  />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}