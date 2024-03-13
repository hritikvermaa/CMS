import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import CustomStyles from './CustomInputStyle'
import { useForm, Controller } from 'react-hook-form'
const CustomInput = ({control,name,rules={},placeholder, secureTextEntry}) => {
  return (

 

           <Controller
           control={control}
           name={name}
          rules={rules}
           render={({field:{value,onChange,onBlur},fieldState: {error}}) => (
             <View style={CustomStyles.userName}>
              <TextInput
               style={CustomStyles.input}
             placeholder={placeholder}
             placeholderTextColor={"#000"}
             value={value}
             onChangeText={onChange}
             onBlur={onBlur}
             secureTextEntry={ secureTextEntry}
             />
              
             </View>
           )}
   
         />
  )
}

export default CustomInput