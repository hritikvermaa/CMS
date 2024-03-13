import { View, Text } from 'react-native'
import React,{useState} from 'react'
import ForgotPStyle from './ForgotPStyle'
import { TextInput } from 'react-native-paper';
import CustomButton from '../../component/customButton/CustomButton';
import * as EmailValidator from 'email-validator';
//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
//import RootStackParamList
import { RootStackParamList } from '../../Router/Router'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

const ForgotPassword = ({navigation}: HomeProps) => {

  const [userName, setUsername] = React.useState("");
  const [Email, setEmail] = useState("");
  const onPressedContinue =()=>{
    console.log("Continue pressed")
    navigation.navigate("NewPasswordScreen")
  }

  const validateEmail = (text)=> {
   setUsername(text);
   setEmail(EmailValidator.validate(text))
  }

  return (
    <View style={ForgotPStyle.section}>
    <View style={ForgotPStyle.section2}>
      <View style={ForgotPStyle.main}>
        <Text style={ForgotPStyle.word1}>Forgot Your Password?</Text>
      </View>
      <View style={ForgotPStyle.main2}>
        <Text style={ForgotPStyle.word2}>Enter your Email and we'll help {"\n"} you reset your password</Text>
      </View>
    

      <View style={ForgotPStyle.email}>
        <TextInput
          label="Email"
          value={userName}
          mode="outlined"
          onChangeText={validateEmail}
          theme={Email? {colors: { primary: '#000' }}:{colors: { primary: '#ff0000' }}}
        />
        <View style={{
          height: 20,
        }}>{!Email && <Text style={{
          color: 'red',
          textAlign: "left",
         
         
        }}>Please enter valid phone number</Text>}</View>
      
      </View>
      </View>
      <CustomButton
       text="Continue"
       onPress={onPressedContinue}
      />
    </View>
  )
}

export default ForgotPassword