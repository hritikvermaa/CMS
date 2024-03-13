import { StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const NewPasswordScreenStyle=StyleSheet.create({
   sectionC:{
      height:height,
      width:width,
  },
  HeadingContainer:{
      margin: 10,
      width: "100%",
      height: 84,
      gap: 10,
      
  },
  HeadingText:{
    color:'#000',
    textAlign: 'center',
    height: 36,
    
    fontWeight: '800',
    fontSize: 36,
    lineHeight: 36

  },

  secondText:{
      
      textAlign: 'center',
      fontSize: 16,
      color: '#494949',
      fontWeight: '400'

  },
  section:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-evenly",
   //   backgroundColor:'red',
      position:'relative'
      
  },
  box:{
      width:61,
      height:63,
      borderRadius:5,
      borderWidth:2,
      borderColor:"#112E40",
      fontSize:26,
      lineHeight:35,
      textAlign:"center",
  },
  thirdC:{
      position:'absolute',
      left:145,
      top:190,
      
  },
  thirdText:{
      color:'#000',
      fontSize:15,
      fontWeight:'bold',

  },


})

export default NewPasswordScreenStyle