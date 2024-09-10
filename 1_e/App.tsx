import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6FFE6',
      }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 35, textAlign: 'center', fontWeight: 'bold' }}>
          REGISTER
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          style={{
            backgroundColor: '#D6EAEA',
            height: 53,
            width: 290,
            fontSize: 20,
            paddingLeft: 12,
          }}
          placeholder="Name"
        />
        <TextInput
          style={{
            backgroundColor: '#D6EAEA',
            height: 53,
            width: 290,
            fontSize: 20,
            paddingLeft: 12,
          }}
          placeholder="Phone"
        />
         <TextInput
          style={{
            backgroundColor: '#D6EAEA',
            height: 53,
            width: 290,
            fontSize: 20,
            paddingLeft: 12,
          }}
          placeholder="Email"
        />
         <TextInput
          style={{
            backgroundColor: '#D6EAEA',
            height: 53,
            width: 290,
            fontSize: 20,
            paddingLeft: 12,
          }}
          placeholder="Pasword"
        />
         <TextInput
          style={{
            backgroundColor: '#D6EAEA',
            height: 53,
            width: 290,
            fontSize: 20,
            paddingLeft: 12,
          }}
          placeholder="Bỉthday"
        />
        
         <TouchableOpacity
          style={{
            backgroundColor: '#E53935',
            height: 45,
            width: 290,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>

     
     
      <View style={{ flex: 1 , justifyContent:'flex-start'}}>
      <Text style={{fontSize:16}}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
};

export default YourApp;
