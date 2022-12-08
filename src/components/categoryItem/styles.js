import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    categoryItemContainer:{
        height: 170,
        width:120,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFD046',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
        margin:15,
    },

    categoryItemInfo:{
        justifyContent:'center',
        alignItems:'center'
    },

    categoryItemTitle:{
        fontFamily:'Poppins-Bold',
        marginVertical:10
    }

})
