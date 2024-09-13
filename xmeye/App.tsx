import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./image/eyeball-3097971.svg')} />
      </View>
      <View style={{ flex: 0.7, justifyContent: 'space-around' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./image/user.png')}
            style={{
              marginRight: 230,
              alignItems: 'center',
              height: 35,
              width: 35,
            }}
          />
          <TextInput
            placeholder="Please input user name"
            style={{
              borderBottomColor: '#cecece',
              borderBottomWidth: 2,
              height: 50,
              width: 270,
              position: 'absolute',
              paddingLeft: 50,
              fontSize: 18,
              color: '#cecece',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./image/lock.png')}
            style={{
              marginRight: 230,
              alignItems: 'center',
              height: 35,
              width: 35,
            }}
          />
          <TextInput
            placeholder="Please input passeword"
            style={{
              borderBottomColor: '#cecece',
              borderBottomWidth: 2,
              height: 50,
              width: 270,
              position: 'absolute',
              paddingLeft: 50,
              fontSize: 18,
              color: '#cecece',
            }}
          />
        </View>
      </View>
      <View
        style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 290,
            backgroundColor: '#3b65db',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ fontSize: 20, color: 'white' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 0.4,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 18
        }}>
        <View style={{width: 100, height:14 , borderBottomWidth:2, borderColor:'#6c85c9'}}/>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          Other Login Methods
        </Text>
         <View style={{width: 100, height:14 , borderBottomWidth:2, borderColor:'#6c85c9'}}/>
      </View>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 16,
        }}>
        <Image source={require('./image/useradd.svg')} />
        <Image source={require('./image/wifi.svg')} />
        <Image
          source={require('./image/fb.jpg')}
          style={{ height: 75, width: 75, borderRadius: 12 }}
        />
      </View>
    </View>
  );
};

export default YourApp;
