import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    inputTaskContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginVertical: 15,
        padding: 8,
        backgroundColor:'white',
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 7, 
      },
      
      inputTask:{
        width:'70%',
        padding:2
      },
})