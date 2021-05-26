import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{ justifyContent: 'center', alignSelf: 'center', top: '50%' }}>
      <Text style={{ fontSize: 20, color: 'red' }}>
        AQUI É ONDE SUA VIDA VAI COMEÇAR DE VEZ !
      </Text>
      <Text style={{ textAlign: 'center' }}>
        Que esse seja somente o começo de uma nova era
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
