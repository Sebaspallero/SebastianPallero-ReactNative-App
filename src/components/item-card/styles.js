import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemCardContainer:{
        width:300,
        height:240,
        marginHorizontal:15,
        marginVertical:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFD046',
        borderRadius:'50%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
     
    },
    itemCardImg:{
        width:120,
        height:100,
        borderRadius:20
    },
    itemCardTitle:{
        marginTop:15,
        fontFamily:'Poppins-Bold'
    },
    itemCardPrice:{
        marginTop:5,
        fontFamily:'Poppins-Bold'
    },
    itemCardBtn:{
        backgroundColor:'white',
        marginTop:15,
        padding:10,
        borderRadius:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
    itemCardBtnTxt:{
        fontFamily:'Poppins-Regular',
    }
})

