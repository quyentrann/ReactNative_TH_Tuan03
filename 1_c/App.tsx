import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundImage:
          'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #37D6F8 96.5%, #00CCF9 100%)',
      }}>
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{ fontSize: 70, fontWeight: 'bold' }}>CODE</Text>
      </View>
      <View
        style={{
          flex: 1.2,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <View style={{ flex: 0.5, alignItems: 'center' }}>
          <Text
            style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
            VERIFICATION
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal:12 }}>
          <Text
            style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
            Enter ontime password sent on ++849092605798
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              width: 50,
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              width: 50,
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              width: 50,
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              width: 50,
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              width: 50,
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              width: 50,
              borderWidth: 1,
            }}
          />
        </View>
      </View>
      <View style={{ flex: 0.7, alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 300,
            backgroundColor: '#E3C000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              display: 'flex',
              fontWeight: 'bold',
            }}>
            VERIFY CODE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourApp;
