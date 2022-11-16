import {FlatList } from 'react-native'
import {styles} from './styles'

import React from 'react'

const TaskList = ({taskList, renderItem}) => {
  return (
    <FlatList
        style={styles.taskListContainer}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
  )
}

export default TaskList