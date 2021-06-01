import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#FFCFF4', '#FB06C5']}>
        <Text>Esta funcionando essa bagaça!!!</Text>
      </LinearGradient>
    </View>
  );
}
