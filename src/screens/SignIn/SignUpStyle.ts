import { StyleSheet } from "react-native";
const SignUpStyle = StyleSheet.create({
  Signup: {
    flex: 1,
    margin: 5,
    padding: 10,
   
    
  },
  backArrow: {
    width: 24,
    height: 24,
    marginLeft: 3
  },
  headingSection: {
    margin: 10,
    width: "100%",
    height: 84,
    gap: 10,
 
  },
  heading: {
    textAlign: 'center',
    height: 36,
    color: '#000',
    fontWeight: '800',
    fontSize: 36,
    lineHeight: 36
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    color: '#494949',
    fontWeight: '400'
  },
  signupForm: {
    display:"flex",
  },
 


  termsCondn:{
   color:'#000',
   position:'absolute',
   left:50,
   top:5,
   
  },
  checkBox: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 3,
    position:'relative'
  },



  haveAccountSection: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent:"center",
    gap:10
  },
  haveAccount: {
    fontSize: 16,
    color:'#000'

  },
  loginBtn: {
    color: '#112e40',
    fontWeight: "900",
    fontSize: 16,
    lineHeight: 21.79,

  },
  or: {
    width: "70%",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginHorizontal:55
  },
  line: {
    backgroundColor:"#112e40",
    width:105,
    height:1,

  },
  textOr:{
    color:'#000',
    fontSize:20

  },
  googleC:{
      paddingRight:8,
      

    },
  googleImg:{
    position:'absolute',
    top:25,
    left:65,
    zIndex:10,
  },




})
export default SignUpStyle