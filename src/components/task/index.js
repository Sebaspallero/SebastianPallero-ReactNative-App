import React from 'react'
import {TouchableOpacity,Text} from 'react-native';
import { styles } from "./styles";

const Task = ({item,onHandleSelected}) => {
  return (
    <TouchableOpacity style={styles.taskContainer} onPress={()=> onHandleSelected(item)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  )
}

export default Task