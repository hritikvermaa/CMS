import { StyleSheet, Dimensions } from "react-native";
const {width,height}=Dimensions.get('window');
const ChangePassStyle = StyleSheet.create({
    section:{
        width:width,
        height:height,
        justifyContent:"space-between",
        paddingBottom:45,
        paddingVertical:50
    },
    section2:{
       // backgroundColor:'red',
        justifyContent:'space-evenly',
        height:'30%'
    },
    main:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
    },
    word1:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000', 
    },
    main2:{
        display:'flex',
    },
    word2:{
        color:'#494949',
        fontSize:17,
        textAlign:'center',
        margin:10
    },
    email:{
        marginLeft:20,
    marginRight:20,
     paddingTop:10
    },
    input:{
        width: "90%",
        marginTop: "5%",
        fontWeight: "700",
        fontSize: 16,
        borderColor:"#000",
        marginHorizontal:20
    }
    


})

export default ChangePassStyle