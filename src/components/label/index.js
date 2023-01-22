import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles'

const Label = (
    {   label, 
        children, 
        style, 
        subLabel, 
        subLabelStyle }) => {
  return (
    <View styles={style.container}>
       <Text style={styles.label}>{label}</Text>
        {children}
        {subLabel ? <Text style={style.subLabel}>{subLabel}</Text> : null}
    </View>
  )
}

export default Label