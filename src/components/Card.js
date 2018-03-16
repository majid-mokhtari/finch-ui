import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Button, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const cards = [
  {
    name: 'Angela, 28',
    city: 'Alabama',
    image: 'https://graph.facebook.com/259389830744794/picture?height=500',
  },
];

class CardComponent extends Component {

  onIconRightPress(){
    this._deckSwiper._root.swipeRight();
  }

  onIconLeftPress(){
    this._deckSwiper._root.swipeLeft();
  }

  onSwipeRight(){ 
    console.log("Right")
  }

  onSwipeLeft(){
    console.log("Left")
  }

  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            onSwipeRight={this.onSwipeRight.bind(this)}
            onSwipeLeft={this.onSwipeLeft.bind(this)}
            renderItem={item =>
              <Card style={styles.cardStyle}>
                <CardItem cardBody>
                  <Image 
                    style={styles.imageStyle} 
                    source={{uri: item.image}} 
                  />
                </CardItem>
                <CardItem>
                  <Text style={styles.nameText}>{item.name}</Text>
                </CardItem>
                <CardItem>
                  <Text>{item.city}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <View style={styles.footerStyle}>
          <Button 
            iconLeft onPress={this.onIconLeftPress.bind(this)}
          >
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button 
            iconRight onPress={this.onIconRightPress.bind(this)}
          >
            <Text>Swipe Right</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    elevation: 3,
  },
  nameText: {
    fontSize: 28,
  },
  imageStyle: {
    height: 450, 
    flex: 1,
    borderRadius: 10
  },
  footerStyle: {
    flexDirection: "row", 
    flex: 1, 
    position: "absolute", 
    bottom: 50, 
    left: 0, 
    right: 0, 
    justifyContent: 'space-between', 
    padding: 15 
  }
});

export default CardComponent;

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image} from 'react-native';

// const reactImage = 'http://geekycentral.com/wp-content/uploads/2017/09/react-native.png';
//const fbImage = 'https://graph.facebook.com/259389830744794/picture?height=500';

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