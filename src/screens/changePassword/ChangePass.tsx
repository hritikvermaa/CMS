import { View, Text } from 'react-native'
import React, {useState} from 'react'
import ChangePassStyle from './ChangePassStyle'
import { TextInput } from 'react-native-paper'
import CustomButton from '../../component/customButton/CustomButton'

//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
//import RootStackParamList
import { RootStackParamList } from '../../Router/Router'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

const ChangePass = ({navigation}: HomeProps) => {
  const [userName, setUsername] = React.useState("");
  const onPressedCreatePassword =()=>{
    console.log("Password created successfully")
    
  }

  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const handleReenterPasswordChange = (text) => {
    setConfirmPassword(text);
    if (password !== '' && text !== password) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  return (
    <View style={ChangePassStyle.section}>
    <View style={ChangePassStyle.section2}>
      <View style={ChangePassStyle.main}>
        <Text style={ChangePassStyle.word1}>Change Your Password?</Text>
      </View>
      <View style={ChangePassStyle.main2}>
        <Text style={ChangePassStyle.word2}>Enter your new password below to{"\n"}change your password</Text>
      </View>
    

      <View style={ChangePassStyle.email}>
         {/* password */}
         <TextInput
          secureTextEntry={!isPasswordVisible}
          style={ChangePassStyle.input}
         // value={password}
          setValue={setPassword}
          mode="outlined"
          label="New password"
    />
        

        {/* re-enter password */}

        <TextInput
          secureTextEntry={!isPasswordVisible}
          style={ChangePassStyle.input}
       //   value={confirmPassword}
          setValue={setConfirmPassword}
          mode="outlined"
          label="Confirm password"
          onChangeText={handleReenterPasswordChange}         
    />
      </View>
      </View>
      <CustomButton
       text="Create password"
       onPress={onPressedCreatePassword}
      />
    </View>
  )
}

export default ChangePass