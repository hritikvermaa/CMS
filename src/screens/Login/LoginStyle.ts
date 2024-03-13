import { StyleSheet } from "react-native"
const LoginStyle=StyleSheet.create({
    mainContainer:{},
    headingContainer:{
        width:292,
      // backgroundColor:'blue',
        marginHorizontal:37,
        marginTop:80
    },
    headingText:{
        color:'#000',
        fontSize:36,
        fontWeight:'bold',
    },
    secondContainer:{
        width:300,
        height:50,
      //  backgroundColor:'red',
         marginHorizontal:40,
         display:'flex',
         flexWrap:'wrap',

        
    },
    text:{
        color:'#000',
        fontSize:20,
        
    },

    userName:{
       
    },
    input:{
        color:'#000'
    },
    passWord:{
       
    },
    thirdContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between"
    },

    checkBox:{
        marginHorizontal:30,
        display:'flex',
        flexDirection:'row',
      
    },
    ForgotPC:{
      marginBottom:5,
      marginRight:10               
    },
    FogotP:{
        color:'#000',
        fontSize:15,
        fontWeight:'bold',
        
        

    },
    textOr:{
        color:'#000',
        fontSize:20
    },
    or:{
        width: "70%",
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginHorizontal:55
    
    },
    line:{
        backgroundColor:"#112e40",
        width:116,
        height:1,
    
    },


    logInContainer:{

    },
    loginBtn:{
        backgroundColor:'#112E40'
      },
      googleC:{
        position:'relative'
      },
      googleImg:{
        position:'absolute',
        top:25,
        left:65,
        zIndex:10,
      }

})

export default LoginStyle