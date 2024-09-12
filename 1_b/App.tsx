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
        <Image
          style={{ height: 153, width: 137 }}
          source={require('./image/Vector (3).png')}
        />
        <Image
          style={{ position: 'absolute', height: 145, width: 130 }}
          source={require('./image/Vector (2).png')}
        />
      </View>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
            FORGET {'\n'}PASSWORD
          </Text>
        </View>
        <View
          style={{
            // flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 17,
              marginHorizontal: 10,
            }}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            display: 'flex',
            alignItems: 'center',
            flex: 1,
          }}>
          <TextInput
            placeholder="Email"
            style={{
              backgroundColor: '#C4C4C4',
              height: 50,
              width: 290,
              paddingLeft: 50,
              position: 'absolute',
            }}
          />
          <Image
            source={require('./image/mail.png')}
            style={{ marginRight: 240, height: 50 }}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 290,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E3C000',
            }}>
            <Text
              style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default YourApp;
