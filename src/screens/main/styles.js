import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({

    mainContainer:{
        backgroundColor:'#F5F5F5',
        height:'70%',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        
    },
    
})
