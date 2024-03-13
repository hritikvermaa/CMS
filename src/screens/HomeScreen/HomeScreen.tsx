import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import HomeScreenStyle from './HomeScreenStyle'

//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
//import RootStackParamList
import { RootStackParamList } from '../../Router/Router'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <View style={HomeScreenStyle.container}>
       {/* Logo Section Start Here */}
       <View style={HomeScreenStyle.logo}>
        <Image style={HomeScreenStyle.logoJpg}   source={{
          uri: 'https://cusat.ac.in/files/pictures/pictures_1_logo.png',
        }}></Image>
        </View>
      {/* Title Section Start Here */}
      <View style={HomeScreenStyle.titleSection}>
        <Text style={HomeScreenStyle.titleName}>REYRENT</Text>
      </View>
      {/* Moto Section Start Here */}
      <View style={HomeScreenStyle.motoSection}>
        <Text style={HomeScreenStyle.motoText}>{`Quick \u2022 Affordable \u2022 Trusted`}</Text>
      </View>
      {/* Button Section Start here */}
      <View style={HomeScreenStyle.buttonSection}>
        <TouchableOpacity style={[HomeScreenStyle.button,HomeScreenStyle.login]} onPress={() => {
          navigation.navigate("Login");
        }} ><Text style={HomeScreenStyle.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[HomeScreenStyle.button,HomeScreenStyle.signup]} onPress={() => {
          navigation.navigate("SignUp");
        }}>
          <Text style={HomeScreenStyle.signupText}>SignUp</Text>
        </TouchableOpacity>
      </View>
      {/* Made in india Section start here */}
        <View style={HomeScreenStyle.indiaSection}>
          <Image source={require('../../asset/HomePage/india.png')}></Image>
          <Text style={HomeScreenStyle.indiaSectionText}>Made In India</Text>
        </View>
    </View>
  )
}

export default HomeScreen