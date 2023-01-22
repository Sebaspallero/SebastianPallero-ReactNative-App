import { StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    keyboardContainer:{
        flex:1,
        backgroundColor:'#E8E8E8',
        justifyContent:'center',
        alignItems:'center',
    },

    authContainer:{
        backgroundColor: '#E8E8E8',
        width: '80%'
    },

    authTitle:{
        fontFamily:'Poppins-Bold',
        paddingBottom: 15,
        fontSize: 16,
        textAlign:'center'
    },

    authLabel:{
        fontFamily:'Poppins-Regular',
        marginBottom: 5,
    },

    authInput:{
        paddingBottom: 20,
        fontFamily:'Poppins-Regular',
        marginBottom: 20,
        borderBottomColor: '#A9A9AC',
        borderBottomWidth: 1,
        width: '90%'
    },

    authLink:{
        fontFamily:'Poppins-Bold',
        textAlign:'center',
        marginTop: 10,
        color:'black'
    },

    submitButton:{
        backgroundColor:'#FFD046',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10
    },

    submitText:{
        textAlign: "center",
        fontFamily: 'Poppins-Regular'
    },

    productImg:{
        width:100,
        height:100,
        margin: 15
    },

    title:{
        fontFamily:'Poppins-Bold',
        fontSize:30,
        color:'black',
    },

    authTitleContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 40
    },

    subTitle:{
        fontFamily: 'Poppins-Regular',
        marginTop: 5,
        color:'#A9A9AC'
    }
})
