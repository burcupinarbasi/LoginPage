/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet, Button,
  ImageBackground,
  
} from 'react-native';

import CheckBox from 'react-native-check-box';

const color = '#03a9f4';
const bgImage = require('./bg.jpg');


const App = () => {
  return (
    <ImageBackground source={bgImage} style={style.image}>
      <View style={style.container}>

        <View style={style.navigationSection}>
          <TouchableOpacity style={[style.navigationButton, style.activeButton]} >
            <Text style={[style.navigationButtonText, style.activeText]}>Giriş Yap</Text>
          </TouchableOpacity >

          <TouchableOpacity style={style.navigationButton}>
            <Text style={style.navigationButtonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>

        <View style={style.loginScreen}>
          <View style={style.inputSection}>
            <TextInput
              autoCapitalize="none"
              placeholder="Mail"
              placeholderTextColor={color}
              style={style.TextInput}>
            </TextInput>
            <TextInput
              placeholder="Şifre"
              placeholderTextColor={color}
              style={style.TextInput}>
            </TextInput>
          </View>

          <View style={style.buttonSection}>
            <View style={style.checkboxSection}>
              <CheckBox
                isChecked={true}
                rightText="Beni Hatırla"
                rightTextStyle={{ color: color }}
                checkBoxColor={color}
                style={{ flexGrow: 1 }} />
              <Text style={{ color: color }}>Şifremi Unuttum</Text>
            </View>

            <TouchableOpacity style={style.loginButton}>
              <Text style={style.loginButtonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </ImageBackground>
  );
}

export default App;

const style = StyleSheet.create({

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },

  container: {
    backgroundColor: '#000',
    opacity: 0.7,
    flex: 1,
    justifyContent: "center",
  },

  navigationSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 60,
    paddingHorizontal: 12,
  },
  navigationButton: {
    alignItems: "center",
    borderColor: color,
    paddingVertical: 12,
  },
  activeButton: {
    borderBottomWidth: 2,
  },
  activeText: {
    fontWeight: '800'
  },
  navigationButtonText: {
    fontSize: 18,
    color: color,
  },

  loginScreen: {
    backgroundColor: '#000000AB',
    borderWidth: 1,
    borderColor: color,
    width: '90%',
    height: '40%',
    marginHorizontal: 20,
    padding: 15,
    justifyContent: 'space-around',
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 21,
  },

  inputSection: {
    justifyContent: "center",
    alignItems: "center",
  },

  buttonSection: {
    justifyContent: 'space-between',
    alignItems: "center",
  },

  checkboxSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    color: color,
  },

  TextInput: {
    fontSize: 16,
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: color,
    borderBottomWidth: 1,
    borderColor: color,
    marginBottom: 15,
  },

  loginButton: {
    width: '100%',
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: color,
    color: '#000',
    marginVertical: 30,
  },

  loginButtonText: {
    fontSize: 16,
    color: '#000',
  },
});


