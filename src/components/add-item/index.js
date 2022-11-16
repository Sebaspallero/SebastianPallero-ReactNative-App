import React from "react";
import {View, TextInput, Button} from 'react-native';
import { styles } from "./styles";

const AddItem = ({task, onHandleTask, onHandleChange})=>{
    return(
        <View  style={styles.inputTaskContainer}>
        <TextInput
           style={styles.inputTask}
           value={task}
           onChangeText={onHandleChange}
           placeholder='Buy Milk...'
        /> 
        <Button disabled={!task} title='Add' onPress={onHandleTask}/>
      </View>
    )
}

export default AddItem