import { StyleSheet} from "react-native";


export const styles = StyleSheet.create({

    mainContainer:{
        backgroundColor:'#F0F0F0',
        justifyContent:'center',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingTop:'10%',
    },

    addressContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'white',
        padding: 25,
        marginHorizontal: '15%',
        marginTop: '15%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },

    addressText:{
        fontFamily: 'Poppins-Regular'
    },

    categoryTitle:{
        fontFamily:'Poppins-Bold',
        fontSize:16,
        marginRight: 5
    },

    categoryContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%',
        marginVTop:10,
        marginBottom: 15
    },

    logo:{
        width:100,
        height:100
    }
})
