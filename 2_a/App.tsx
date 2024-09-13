import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)',
      }}>
      <View style={{ flex: 1.5, justifyContent: 'center', paddingLeft: 30 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 37 }}>LOGIN</Text>
      </View>

      <View
        style={{
          flex: 1.5,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholder="Name"
            style={{
              height: 60,
              width: 290,
              backgroundColor: '#e5c33b',
              paddingHorizontal: 50,
              fontSize: 18,
              fontWeight: 400,
            }}
          />
          <Image
            source={require('./image/avatar_user 1.png')}
            style={{
              position: 'absolute',
              height: 38,
              width: 34,
              marginLeft: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholder="Password"
            style={{
              height: 60,
              width: 290,
              backgroundColor: '#e5c33b',
              paddingHorizontal: 50,
              fontSize: 18,
              fontWeight: 400,
            }}
          />
          <Image
            source={require('./image/lock-152879 1.png')}
            style={{
              position: 'absolute',
              height: 38,
              width: 34,
              marginLeft: 10,
            }}
          />

          <Image
            source={require('./image/eye1.png')}
            style={{
              position: 'absolute',
              height: 38,
              width: 40,
              marginLeft: 230,
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 290,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 27, fontWeight: 'bold', color: 'white' }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ alignItems: 'center', justifyContent: 'flex-start', flex: 1.5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 26 }}>CREATE ACCOUNT</Text>
      </View>
    </View>
  );
};

export default YourApp;
