import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6FFE6',
      }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 35, textAlign: 'center', fontWeight: 'bold' }}>
          LOGIN
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          style={{
            backgroundColor: '#D3D3D3',
            height: 53,
            width: 290,
            fontSize: 20,
            paddingLeft: 12,
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            backgroundColor: '#D3D3D3',
            height: 53,
            width: 290,
            fontSize: 20,
            paddingLeft: 12,
          }}
          
          placeholder="Password"
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#E53935',
            height: 45,
            width: 290,
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 15 }}>
          When you agree to terms and conditions
        </Text>
        <Text style={{color: 'blue'}}>For got your password?</Text>
        <Text>Or login with</Text>
      </View>
      <View
        style={{
          height: '60px',
          width: '100%',
          marginTop: 20,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#0680F1',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#25479B',
          }}>
         <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#fff' }}>f</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0F8EE0',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#fff' }}>
            Z
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '',
          }}>
         <Text style={{fontWeight: 'bold', fontSize: 40, color: 'black'}}>G</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default YourApp;
