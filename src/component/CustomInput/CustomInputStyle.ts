import {StyleSheet,Dimensions} from 'react-native'
const {width,height} = Dimensions.get("window")
const CustomStyles = StyleSheet.create({


  input:{
   width:width-40,
   borderWidth:1,
   marginVertical:10,
   marginLeft:20,
   borderRadius:10,
   paddingHorizontal:10,
   color:'#000'
  },
  userName:{},
    

})

export default CustomStyles