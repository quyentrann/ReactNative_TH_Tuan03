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
            uri: 'https://res.cloudinary.com/dw7suzu56/image/upload/v1725508268/esepjewmvbfh7s70opcj.png',
          }}
          style={{ width: 150, height: 170 }}
        />
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dw7suzu56/image/upload/v1725508266/xydle2m1gttaf749h1ry.png',
          }}
          style={{
            width: 150,
            height: 170,
            position: 'absolute', // Positioning the new image over the existing one
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
          FORGET {'\n'}PASSWORD
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 12,
          marginLeft: 12,
          marginRight: 12,
        }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
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
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default YourApp;
