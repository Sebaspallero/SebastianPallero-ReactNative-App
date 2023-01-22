import { View, TextInput, Text } from 'react-native'
import React from 'react'
import Label from '../label/index'
import {styles} from './styles'

const Input = ({
    editable, 
    children, 
    value, 
    onChangeText, 
    onFocus, 
    onBlur, 
    maxLength, 
    placeHolder,
    keyboardType,
    hasError,
    error,
    touched,
    ...props}) => {
  return (
    <View>
        <Label {...props}>
            <TextInput 
            {...props}
                editable={editable}
                children={children}
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                maxLength={maxLength}
                placeHolder={placeHolder}
                keyboardType={keyboardType}
                />
        </Label>
        {hasError && touched ? (
        <View style={styles.message}>
          <Text style={styles.helperText}>{error}</Text>
        </View>
      ) : null}
    </View>
  )
}

export default Input