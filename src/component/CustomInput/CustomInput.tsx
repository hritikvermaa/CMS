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
            <>
             <View style={[CustomStyles.userName,{borderColor: error ?'red' : '#000'}]}>
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
             {error && (
             <Text style={{color:'red',marginHorizontal:20}}>{error.message || 'Error'}</Text>
             )}
             </>
           )}
   
         />
  )
}

export default CustomInput