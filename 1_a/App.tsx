import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #37D6F8 96.5%, #00CCF9 100%)',
      }}>
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: '170px',
            width: '170px',
            borderColor: 'black',
            borderWidth: 18,
            borderRadius: '50%',
          }}></View>
      </View>
      <View style={{ flex: 1.5, justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
            GROW{'\n'} YOUR BUSINESS
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
              marginHorizontal: 12,
            }}>
            We will help you to grow your business using online server
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
          <TouchableOpacity
            style={{
              height: 50,
              width: 120,
              backgroundColor: '#E3C000',
              justifyContent: 'center',
            }}>
            <Text
              style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 120,
              backgroundColor: '#E3C000',
              justifyContent: 'center',
            }}>
            <Text
              style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>HOW WE WORK?</Text></View>
      </View>
    </View>
  );
};

export default YourApp;
