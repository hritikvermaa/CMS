import { StyleProp, StyleSheet } from "react-native";

const HomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFC',
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
      },
      logo: {
        width: 275,
        height: 275,
   
        borderRadius: 132,
      },
      logoJpg:{
          width:"100%",
          height:"100%",
          resizeMode:"contain",
      },
      titleSection: {
        margin: 30,
      },
      titleName: {
        fontWeight: '800',
        fontSize: 40,
        color: '#112E40',
      },
      motoSection: {
        width: 207,
        height: 24
      },
      motoText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
        lineHeight: 19.2,
      },
      buttonSection: {
        display: 'flex',
        flexDirection: 'row',
        width: 330,
        height: 44,
        justifyContent: 'space-evenly',
        marginTop:20
      },
      button:{
        width:140,
        height:44,
        borderRadius:8,
        paddingVertical:5,
        paddingHorizontal:30,
      },
      login:{
        backgroundColor:'#112e40',
      },
      loginText:{
        color:'#fff',
        fontWeight:'800',
        fontSize:20,
        textAlign:'center'
      },
      signup:{
        borderColor:'#112e40',
        borderWidth:1
      },
      signupText:{
        color:'#000',
        fontWeight:'800',
        fontSize:20,
        textAlign:'center'
      },
      indiaSection:{
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        width:138,
        height:19,
        gap:10,
        bottom:50,
      },
      indiaSectionText:{
          color:'#112e40'
      }

})

export default HomeScreenStyle