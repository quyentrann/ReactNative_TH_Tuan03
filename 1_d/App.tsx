import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#d5ede0',
      }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>LOGIN</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TextInput
          placeholder="Email"
          style={{
            height: 55,
            width: 290,
            backgroundColor: 'rgba(211,211,211, 0.3)',
            paddingHorizontal: 15,
            borderRadius: 5,
            fontSize: 18,
          }}
        />
        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
          <TextInput
            placeholder="Password"
            style={{
              height: 55,
              width: 290,
              backgroundColor: 'rgba(211,211,211, 0.3)',
              paddingHorizontal: 15,
              borderRadius: 5,
              fontSize: 18,
            }}
          />
          <Image
            source={require('./image/eye1.png')}
            style={{
              position: 'absolute',
              height: 20,
              width: 30,
              marginRight: 12,
            }}
          />
        </View>
      </View>
      <View
        style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#e06462',
            justifyContent: 'center',
            height: 50,
            width: 290,
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.7,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 17 }}>
          When you agree to terms and conditions
        </Text>
        <Text style={{ color: 'blue', fontSize: 17 }}>
          For got your password?
        </Text>
        <Text style={{ fontSize: 17 }}>Or login with</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: 90,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./image/fb.png')}
            style={{ height: 53, width: 96 }}
          />
        </View>
        <View>
          <Image
            source={require('./image/zl.png')}
            style={{ height: 53, width: 96 }}
          />
        </View>
        <View
          style={{
            height: 53,
            width: 96,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#6b8dea',
            borderWidth:2
          }}>
          <Image
            source={require('./image/gg.png')}
            style={{ height: 49, width: 90 }}
          />
        </View>
      </View>
    </View>
  );
};

export default YourApp;
