import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    popularContainer:{
        justifyContent:'center',
        alignItems:'flex-start',
        width:'85%',
        marginVertical:5,
        marginBottom:'10%',
        marginTop:'10%'
    },

    popularTitle:{
        fontFamily:'Poppins-Bold',
        fontSize:16,
    },

    popularCard:{
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

    popularImg:{
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

    PopularDescriptionContainer:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginHorizontal:20,
    },

    PopularText:{
        fontFamily:'Poppins-Regular',
        fontSize:15,
        marginVertical:5,
    },

    PopularTextDescription:{
        fontFamily:'Poppins-Regular',
        fontSize:11
    }
})
