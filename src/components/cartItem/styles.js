import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    productContainer:{
        justifyContent:'center',
        alignItems:'flex-start',
        marginTop: 20,
        marginBottom: 15
    },

    productCard:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'20%',
        borderRadius:20,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },

    productImg:{
        width:110,
        height:110,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },

    productDescriptionContainer:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginHorizontal:20,
    },

    productText:{
        fontFamily:'Poppins-Regular',
        fontSize:15,
        marginVertical:5,
    },

    productTextDescription:{
        fontFamily:'Poppins-Regular',
        fontSize:11
    },

    priceContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'8%',
        marginBottom:'2%'
    },


    productPrice:{
        fontFamily:'Poppins-Bold',
        marginLeft:'60%',
    },

    productQuantity:{
        marginLeft: 5
    },

    productX:{
        fontFamily: 'Poppins-Regular',
        marginLeft: 5
    },

    trashIcon:{
        marginLeft: 5
    }
})