import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    preview: {
        padding: 10,
        marginHorizontal: 25,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      
      elevation: 2,
      backgroundColor:'white',
      minHeight: 200
    },

    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'space-around'
      },

      addressContainer:{
        maxWidth: '67%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius: 20,
        padding: 20,
        marginLeft: '6%',
        marginRight: '3%',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
        backgroundColor:'white',
    },

    locationIcon:{
      fontSize: 40,
    },

    locationText:{
      fontFamily:'Poppins-Regular',
      paddingRight: '10%'
    },

    locationContainer:{
      flexDirection:'row',
      alignItems:'center',
      marginTop: '6%'
    },

    mapIconContainer:{
      borderRadius: 20,
        padding: 20,
        shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      
      elevation: 2,
      backgroundColor:'white',
    },



});