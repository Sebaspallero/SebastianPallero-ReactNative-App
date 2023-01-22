import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    productContainer:{
        backgroundColor: 'blue',
        margin: 20,
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
        backgroundColor:'white'
    },

    deliveryStatusContainer:{
        flexDirection: 'row',
        alignItems: "center",
    },

    entregadoText:{
        fontFamily: 'Poppins-Bold',
        color:'#FFD046'
        
    },

    dateText:{
        fontFamily: 'Poppins-Regular',
    },

    title:{
        fontFamily: 'Poppins-Bold',
    },

    deliveryPriceContainer:{
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 15
    },

    quantity:{
        fontFamily: 'Poppins-Regular',
    },

    total:{
        fontFamily: 'Poppins-Regular',
    },

    trashIcon:{
        marginLeft:'92%',
        flexDirection:'row',
        justifyContent:'flex-end',
    },

    imgContainer:{
        flexDirection:'row',
        marginRight: "15%"
    },

    orderImg:{
        width: 50,
        height: 50,
        marginRight: -30,
        borderRadius: 10,
    },

    orderInfo:{
        flexDirection: 'row',
        alignItems: 'strech',
        marginTop: '3%'
    }

})