import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    productDetailContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'20%'
    },

    title:{
        fontFamily: 'Poppins-Bold',
        fontSize: 18
    },

    description:{
        fontFamily: 'Poppins-Regular',
        textAlign: "center",
        marginVertical: 20,
        marginHorizontal: 15
    },

    image:{
        width: 250,
        height: 250,
        borderRadius: 20
    },

    priceContainer:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 50,
        width:'80%'
    },

    priceText:{
        fontFamily:'Poppins-Regular',
        fontSize: 16,
        color: '#FFD046'
    },

    price:{
        fontFamily: 'Poppins-Bold',
        fontSize: 25
    },

    cartBtn:{
        backgroundColor:'#FFD046',
        padding: 20,
        borderRadius: 20
    },

    cartMsg:{
        fontFamily:'Poppins-Bold'
    },
    

})