import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({

    mainContainer:{
        backgroundColor:'#F0F0F0',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingTop:'18%',
    },
})
