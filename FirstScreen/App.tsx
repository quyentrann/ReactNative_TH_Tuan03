import React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00CCF9',
      }}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dw7suzu56/image/upload/v1725418940/lwgasan5ctb5yvjbfsji.png',
          }}
          style={{ width: 170, height: 170 }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
          GROW {'\n'}YOUR BUSINESS
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '12px',
          marginRight: '12px',
        }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              height: 55,
              width: 130,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E3C000',
              borderRadius: '12px',
              marginRight: '10px',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              height: 55,
              width: 130,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E3C000',
              borderRadius: '12px',
              marginLeft: '10px',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default YourApp;
