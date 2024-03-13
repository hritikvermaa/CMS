import { View, Text, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import ConfirmEmailStyle from './ConfirmEmailStyle'
import CustomButton from '../../component/customButton/CustomButton'
import BottomTab from '../../component/BottomTabNavigation/BottomTab'

//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
//import RootStackParamList
import { RootStackParamList } from '../../Router/Router'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

const ConfirmEmail = ({navigation}: HomeProps) => {

  const onSubmitPressed=() => {
    console.log("Email Verification Successful");
    navigation.navigate("BottomTab");

   }

   const isCodeResend=() => {
    console.log("Code Resent Successful");
   }

  return (
    <View style={ConfirmEmailStyle.sectionC}>    
    <View style={ConfirmEmailStyle.HeadingContainer}>
     <Text style={ConfirmEmailStyle.HeadingText}> Verfication Code  </Text>
     <Text style={ConfirmEmailStyle.secondText}>Please enter the code sent to you via email</Text>
    </View>
    
       
   
    {/* otp enter section  */}
    
    <View style={ConfirmEmailStyle.section}>
        <TextInput style={ConfirmEmailStyle.box} maxLength={1} keyboardType='numeric'></TextInput>
        <TextInput style={ConfirmEmailStyle.box} maxLength={1} keyboardType='numeric'></TextInput>
        <TextInput style={ConfirmEmailStyle.box} maxLength={1} keyboardType='numeric'></TextInput>
        <TextInput style={ConfirmEmailStyle.box} maxLength={1} keyboardType='numeric'></TextInput>
      
    </View>

    {/* otp enter section ends */}
    <TouchableOpacity 
    style={ConfirmEmailStyle.thirdC}
    onPress={isCodeResend}
    >
        <Text style={ConfirmEmailStyle.thirdText}>Resend code</Text>
    </TouchableOpacity>

    <CustomButton 
    text="Submit"
    onPress={onSubmitPressed}
    />
    </View>

   

  )
}

export default ConfirmEmail