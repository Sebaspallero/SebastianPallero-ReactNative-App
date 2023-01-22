import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    categoryItemContainer:{
        height: 180,
        width:100,
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
        height:'100%',
        justifyContent:'space-around',
        alignItems:'center'
    },

    titleContainer:{
        justifyContent:'center',
        alignItems:'center'
    },

    categoryItemTitle:{
        fontFamily:'Poppins-Bold',
        fontSize:12,
        marginVertical:10
    },

    categoryIconContainer:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },

    categoryIcon:{
        fontSize: 50,
    },

})
