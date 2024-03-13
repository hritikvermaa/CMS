import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import NewPasswordScreenStyle from './NewPasswordScreenStyle'
import CustomButton from '../../component/customButton/CustomButton'
//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
//import RootStackParamList
import { RootStackParamList } from '../../Router/Router'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

const NewPasswordScreen = ({navigation}: HomeProps) => {
 
    const onSubmitPressed=() => {
        console.log("Code verified successfully");
        navigation.navigate("ChangePass")
       }
    
       const isCodeResend=() => {
        console.log("Code Resent Successful");
       }
       

  return (
    <View style={NewPasswordScreenStyle.sectionC}>    
    <View style={NewPasswordScreenStyle.HeadingContainer}>
     <Text style={NewPasswordScreenStyle.HeadingText}> Verfication Code  </Text>
     <Text style={NewPasswordScreenStyle.secondText}>Please enter the code sent to you via email</Text>
    </View>
    
       
   
    {/* otp enter section  */}
    
    <View style={NewPasswordScreenStyle.section}>
        <TextInput style={NewPasswordScreenStyle.box} maxLength={1} keyboardType='numeric'></TextInput>
        <TextInput style={NewPasswordScreenStyle.box} maxLength={1} keyboardType='numeric'></TextInput>
        <TextInput style={NewPasswordScreenStyle.box} maxLength={1} keyboardType='numeric'></TextInput>
        <TextInput style={NewPasswordScreenStyle.box} maxLength={1} keyboardType='numeric'></TextInput>
      
    </View>

    {/* otp enter section ends */}
    <TouchableOpacity 
    style={NewPasswordScreenStyle.thirdC}
    onPress={isCodeResend}
    >
        <Text style={NewPasswordScreenStyle.thirdText}>Resend code</Text>
    </TouchableOpacity>

    <CustomButton 
    text="Submit"
    onPress={onSubmitPressed}
    />
    </View>
  )
}

export default NewPasswordScreen