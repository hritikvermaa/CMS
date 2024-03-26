import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable
} from 'react-native'
import React, { useState } from 'react'
import LoginStyle from './LoginStyle'
import CheckBox from 'react-native-check-box'
import CustomButton from '../../component/customButton/CustomButton'
import CustomInput from '../../component/CustomInput/CustomInput'
//hooks
import { useForm, Controller } from 'react-hook-form'
//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
//import RootStackParamList
import { RootStackParamList } from '../../Router/Router'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login = ({ navigation }: HomeProps) => {

  const { control, handleSubmit, formState: { errors }
  } = useForm();

  console.log(errors);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const [isChecked, setIsChecked] = useState(false);


  const onForgotPasswordPressed = () => {
    console.log("Forgot Password clicked")
    navigation.navigate("ForgotPassword")
  }

  const onSignInPressed = data => {
    console.log(data)
    console.log("Log In clicked");
  }

  const onGooglePressed = () => {
    console.log("Sign up via Google");
  }


  return (
    <View style={LoginStyle.mainContainer}>
      <View style={LoginStyle.headingContainer}>
        <Text style={LoginStyle.headingText}>Welcome Back</Text>
      </View>
      <View style={LoginStyle.secondContainer}>
        <Text style={LoginStyle.text}>Enter your credentials to access your {'\n'}account</Text>
      </View>

      <View>
        <View style={LoginStyle.userName}>
          <CustomInput
            style={LoginStyle.input}
            name="Email ID/Phone Number"
            placeholder="Email ID/Phone Number"
            control={control}
            rules={{ required: 'Email is required' }}

          />

        </View>



        <View style={LoginStyle.passWord}>
          <CustomInput
            style={LoginStyle.input}
            name="Password"
            placeholder='Password'
            secureTextEntry={!isPasswordVisible}
            control={control}
            rules={{ required: 'Password is required',minLength:{value:8,message:'Password must be minimum 8 characters long'} }}
          />
        </View>

      </View>


      <View style={LoginStyle.thirdContainer}>
        <View style={LoginStyle.checkBox}>

          <CheckBox
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          />

          <Text style={{color:"black"}}>
            Remember me
          </Text>

        </ View>
        <Pressable
          onPress={onForgotPasswordPressed}
        >
          <View style={LoginStyle.ForgotPC}>
            <Text style={LoginStyle.FogotP} >Forgot Password</Text>
          </View>
        </Pressable>

      </View>

      <View style={LoginStyle.logInContainer}>
        <CustomButton
          text="Log In"
          onPress={handleSubmit(onSignInPressed)}

        />
      </View>
      {/* --------------or---------- Section */}
      <View style={LoginStyle.or}>
        <View style={LoginStyle.line}>
        </View>
        <Text style={LoginStyle.textOr}>
          OR
        </Text>
        <View style={LoginStyle.line}>
        </View>
      </View>
      {/* signup with google section */}
      <View style={LoginStyle.googleC}>
        <Image
          style={LoginStyle.googleImg}
          source={require('../../asset/Image/google.png')}
        />
        <CustomButton
          text="Sign up via Google"
          onPress={onGooglePressed}
          type="TERTIARY"
          bgColor="#fff"
          fgColor="#000"
        />
      </View>

    </View>
  )
}

export default Login