import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    cartContainer:{
        
    },

    cartTitle:{
        textAlign:'center',
        fontFamily:'Poppins-Bold',
        fontSize: 20,
        marginTop: '10%'
        
    },
    
    productDetailContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'30%'
    },

    cartButton:{
        marginVertical:20,
        marginHorizontal:20,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        height:70,
        backgroundColor:'#FFD046'
    },

    cartBtnText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 14
    },

    cartBtnTextBold:{
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },

    deliveryContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius: 20,
        padding: 30,
        marginHorizontal: '6%',
        marginTop:'15%',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
        backgroundColor:'white',
    },

    deliveryText:{
        fontFamily:'Poppins-Regular',
        fontSize: 16
    },

    deliveryTextAccent:{
        fontFamily:'Poppins-Regular',
        color: '#FFD046',
        fontSize: 15,
        marginTop: 5
    },

    carritoMsgContainer:{
        borderRadius: 20,
        padding: 30,
        marginHorizontal: '6%',
        marginTop: 20,
        marginBottom: 5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
        backgroundColor:'white',
    },

    carritoMsg:{
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    }


})