import React from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { Text, Input, Item, Label, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#ffffff', '#FF61DC', '#FF41D5']}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
          }}>
          <Text style={{fontSize: 30 }}>iiih FUDEU!!!</Text>
        </View>

        <View
          style={{
            height: 150,
            justifyContent: 'center',
            marginLeft: 16,
            marginRight: 16,
          }}>
          <Item floatingLabel style={{ borderColor: '#ffffff' }}>
            <Label style={{ color: '#ffffff' }}>Usuário</Label>
            <Input style={{ color: '#ffffff' }} />
          </Item>
          <Item floatingLabel style={{ marginTop: 10, borderColor: '#ffffff' }}>
            <Label style={{ color: '#ffffff' }}>Senha</Label>
            <Input
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry={true}
              style={{ color: '#ffffff' }}
            />
          </Item>
        </View>

        <TouchableOpacity
          underlayColor="rgba(0, 0, 0, 0.2)"
          useForeground
          background={TouchableNativeFeedback.Ripple()}
          onPress={() => { }}
          style={{
            height: 50,
            width: '95%',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 36,
            elevation: 5,
            marginTop: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FA69DA',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Bora Entrar!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          underlayColor="rgba(0, 0, 0, 0.2)"
          useForeground
          background={TouchableNativeFeedback.Ripple()}
          onPress={() => { }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{ color: '#ffffff', textDecorationLine: 'underline' }}>
            Faça seu cadastro já!
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            marginTop: 25
          }}>
          <View
            style={{
              height: 1,
              backgroundColor: '#ffffff',
              width: 150,
              alignSelf: 'center',
            }}
          />
          <Text style={{ textAlign: 'center', marginLeft: 10, marginRight: 10, color:'#ffffff', textTransform:'uppercase' }}>ou</Text>
          <View
            style={{
              height: 1,
              backgroundColor: '#ffffff',
              width: 150,
              alignSelf: 'center',
            }}
          />
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
