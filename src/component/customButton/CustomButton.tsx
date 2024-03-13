import { View, Text,Pressable,StyleSheet } from 'react-native'
import React from 'react'
import CustomButtonStyle from './CustomButtonStyle'
const CustomButton = ({onPress,text,type="PRIMARY",bgColor,fgColor}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={[
      CustomButtonStyle.container,
      CustomButtonStyle[`container_${type}`],
      bgColor ? {backgroundColor :bgColor} : {}
    ]}>
      <Text style={[
        CustomButtonStyle.text,
        CustomButtonStyle[`text_${type}`],
        fgColor ? {color: fgColor} : {}
        ]}>
          {text}
      </Text>
    </Pressable>
  )
}

export default CustomButton