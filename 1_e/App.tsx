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
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>REGISTER</Text>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TextInput
          placeholder="Name"
          style={{
            height: 55,
            width: 290,
            backgroundColor: 'rgba(211,211,211, 0.3)',
            paddingHorizontal: 15,
            borderRadius: 5,
            fontSize: 18,
          }}
        />
        <TextInput
          placeholder="Phone"
          style={{
            height: 55,
            width: 290,
            backgroundColor: 'rgba(211,211,211, 0.3)',
            paddingHorizontal: 15,
            borderRadius: 5,
            fontSize: 18,
          }}
        />
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
        <TextInput
          placeholder="Birthday"
          style={{
            height: 55,
            width: 290,
            backgroundColor: 'rgba(211,211,211, 0.3)',
            paddingHorizontal: 15,
            borderRadius: 5,
            fontSize: 18,
          }}
        />
        <View style={{ flexDirection: 'row', marginRight: 100 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}></View>
            <Text style={{ fontSize: 16 }}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}></View>
            <Text style={{ fontSize: 16 }}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ flex: 1.3, justifyContent: 'center', alignItems: 'center' }}>
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
            REGISTER
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 14 }}>
          <Text style={{ fontSize: 14, fontWeight: 500 }}>
            When you agree to terms and conditions
          </Text>
        </View>
      </View>
    </View>
  );
};

export default YourApp;
