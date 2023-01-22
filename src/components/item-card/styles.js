import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemCardContainer:{
        width:300,
        height:320,
        marginHorizontal:15,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.51,
        
        elevation: 3,
     
    },

    imgBkg:{
        justifyContent:'center',
        alignItems:'center'
    },

    itemCardImg:{
        width:280,
        height:140,
        borderRadius:20,
    },

    infoContainer:{
        width: 280,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: '10%'
    },

    itemCardTitle:{
        fontFamily:'Poppins-Regular',
        fontSize: 15
    },

    itemCardPrice:{
        fontFamily:'Poppins-Bold',
        fontSize: 15
    },

    itemCardBtn:{
        backgroundColor:'#FFD046',
        width: '90%',
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 25,
        padding: 20,
        borderRadius:20,
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
        fontFamily:'Poppins-Bold',
    },

    itemDescription:{
        fontFamily: 'Poppins-Regular',
        marginTop: 40,
        fontSize: 12
    }
})

