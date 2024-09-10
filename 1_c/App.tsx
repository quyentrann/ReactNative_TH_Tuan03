import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

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
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 60, textAlign: 'center', fontWeight: 'bold' }}>
          CODE
        </Text>
      </View>
       <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: 12,
          marginRight: 12,
        }}>
        <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center' }}>
         VERIFICATION
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginLeft: 12,
          marginRight: 12,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
         Enter ontime password sent on ++849092605798
        </Text>
      </View>
      
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          
        }}>
        <View style={{flexDirection:"row", justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 1,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
            
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 1,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 1,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 1,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 1,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        <TextInput
          style={{
            height: 50,
            width: 50,
            borderWidth: 1,
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
          }}
        />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              height: 55,
              width: 300,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E3C000',
              marginRight: 10,
              marginTop: 12,
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default YourApp;
