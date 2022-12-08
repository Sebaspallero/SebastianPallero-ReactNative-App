import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({

    mainContainer:{
        backgroundColor:'#E8E8E8',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingTop:'18%',
    },
})
