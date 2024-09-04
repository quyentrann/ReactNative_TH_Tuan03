import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(180deg, #C7F4F7 0%, #D1F4F6 30%, #E5F4F5 85%, #00CCF9 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          marginLeft: 12,
          marginRight: 12,
        }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              height: 55,
              width: 130,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E3C000',
              borderRadius: 12,
              marginRight: 10,
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              height: 55,
              width: 130,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E3C000',
              borderRadius: 12,
              marginLeft: 10,
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 20 , flex:1}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>HOW WE WORK?</Text>
      </View>
    </View>
  );
};

export default YourApp;
