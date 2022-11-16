import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    modalContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E5E1EE',
        borderRadius:50,
        marginTop:'60%',
        paddingVertical:20,
        marginHorizontal:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 7, 
      },
    
      modalTitle:{
        fontSize:18,
        fontWeight: 'bold',
        paddingVertical:20
      },
    
      modalDetailContainer:{
        paddingVertical:10,
        alignItems:'center'
      },
    
      modalDetailTitle:{
        fontSize:14,
        paddingVertical:20
      },
    
      modalDetailTask:{
        fontSize:14,
        fontWeight:'bold'
      },
    
      modalButtonContainer:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingVertical:15,
        marginHorizontal:20
      },
})

