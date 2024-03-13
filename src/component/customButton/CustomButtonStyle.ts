import { StyleSheet } from "react-native";
const CustomButtonStyle=StyleSheet.create({
  container:{
    alignItems:'center',
   
    width:'90%',
    marginHorizontal:20,
    padding:15,
    marginVertical:5,
    borderRadius:10,
  },
  container_PRIMARY:{
    backgroundColor:'#000',
  },
  container_TERTIARY:{
     borderWidth:2,
  },
  text:{
    fontWeight:'bold',
    fontSize:20,
      color:'#fff',
  },
  text_TERTIARY:{
   color:'gray'
  }
})

export default CustomButtonStyle