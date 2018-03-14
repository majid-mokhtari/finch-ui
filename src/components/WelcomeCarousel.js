import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Carousel from 'react-native-carousel-view';

export default class WelcomeCarousel extends Component {
  render() {
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.container}>
          <Carousel
            width={375}
            height={400}
            delay={5000}
            indicatorAtBottom={true}
            indicatorSize={20}
            indicatorText="&bull;"
            indicatorColor="grey"
            indicatorOffset={0}
            inactiveIndicatorText="&#9702;"
            >
            <View style={styles.contentContainer}>
                <Image 
                  source={require('../images/finch_logo.png')}
                  style={styles.firstImageStyle}
                />
            </View>
            <View style={styles.contentContainer}>
              <Image 
                  source={require('../images/match.png')}
                  style={styles.secondImageStyle}
                />
            </View>
          </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstImageStyle: {
    width: 450, 
    height: 400, 
    borderRadius: 5
  },
  secondImageStyle: {
    width: 310, 
    height: 330, 
    borderRadius: 5
  },
});