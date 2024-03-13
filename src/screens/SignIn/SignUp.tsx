import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import SignUpStyle from './SignUpStyle';

import CheckBox from 'react-native-check-box';
import { useForm, Controller } from 'react-hook-form'
import CustomInput from '../../component/CustomInput/CustomInput';

//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
//import rootstackparamslist
import { RootStackParamList } from '../../Router/Router';
import CustomButton from '../../component/customButton/CustomButton';
import ConfirmEmail from '../ConfirmEmail/ConfirmEmail';
type HomeProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&*+/=?^_^{}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUp = ({ navigation }: HomeProps) => {




  const [isChecked, setIsChecked] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // password validation

  const [passwordsMatch, setPasswordsMatch] = useState(true);



  const { control, handleSubmit, watch, formState: { errors }
  } = useForm();

  console.log(errors);

  const pwd = watch('Password');

  const onSignUpPressed = data => {
    console.log(data)
    console.log("Sign Up");
    navigation.navigate("ConfirmEmail")
  };

  const onGooglePressed = () => {
    console.log("Sign up via Google");
  }

  return (
    <ScrollView>
      <View style={SignUpStyle.Signup}>

      </View>
      <View style={SignUpStyle.headingSection}>
        <Text style={SignUpStyle.heading}>Let's get Started!</Text>
        <Text style={SignUpStyle.paragraph}>Ensure that your credentials are entered {"\n"} correctly before proceeding</Text>

      </View>
      {/* Signup Section Start Here */}


      <View style={SignUpStyle.signupForm}>
        <View style={SignUpStyle.userName}>
          <CustomInput
            name="Full Name"
            placeholder="Full Name"
            control={control}
          />
        </View>

        <View style={SignUpStyle.email}>
          <CustomInput
            name="Email"
            placeholder="Email"
            control={control}
          />
        </View>


        <View style={SignUpStyle.password}>
          <CustomInput
            name="Password"
            placeholder="Password"
            secureTextEntry={true}
            control={control}

          />
        </View>

        <View style={SignUpStyle.password2}>
          <CustomInput
            name="Re-enter Password"
            placeholder="Re-enter Password"
            secureTextEntry={true}
            control={control}

          />
        </View>


        <View style={SignUpStyle.checkBox}>
          <CheckBox
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          />
          <Text style={SignUpStyle.termsCondn}>I accept terms and conditions and privacy policy</Text>
        </View>

        <CustomButton

          text="Sign Up"
          onPress={handleSubmit(onSignUpPressed)}
        />

        <View style={SignUpStyle.haveAccountSection}>
          <Text style={SignUpStyle.haveAccount}>Have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate("Login") }}>
            <Text style={SignUpStyle.loginBtn}>Login</Text>
          </TouchableOpacity>
          {/* or section starts here  */}
        </View>
        <View style={SignUpStyle.or}>
          <View style={SignUpStyle.line}>
          </View>
          <Text style={SignUpStyle.textOr}>
            OR
          </Text>
          <View style={SignUpStyle.line}>
          </View>
        </View>

        {/* google login section */}
        <View style={SignUpStyle.googleC}>
          <Image
            style={SignUpStyle.googleImg}
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
    </ScrollView>

  )
}


export default SignUp