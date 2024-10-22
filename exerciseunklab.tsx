import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.boxBlack} />
        <View style={styles.boxYellow} />
        <View style={styles.boxBlack} />
      </View>

      <View style={styles.middleSection}>
        <Image
          style={styles.logo}
          source={require('./assets/logounklab.png')}
        />
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.boxBlack} />
        <View style={styles.boxYellow} />
        <View style={styles.boxBlack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  boxBlack: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    margin: 5,
  },
  boxYellow: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
    margin: 5,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 60,
    marginBottom: 20,
  },
});
