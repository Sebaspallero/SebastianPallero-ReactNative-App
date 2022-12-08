import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    productContainer:{
        justifyContent:'center',
        alignItems:'flex-start',
        marginVertical:5,
        
        
    },

    productCard:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        height:100,
        marginHorizontal:'15%',
        marginVertical:'5%',
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
        height:100,
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

    productPrice:{
        fontFamily:'Poppins-Bold',
        marginLeft:'75%',
        marginTop:10
    }
})