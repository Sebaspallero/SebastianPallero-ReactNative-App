import { View, Text, Button, Modal } from 'react-native'
import React from 'react'
import {styles} from './styles'

const TaskModal = ({selectedTask, onHandleCancel, onHandleDelete, modalVisible}) => {
  return (
    <Modal visible={modalVisible} animationType='fade'>
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Task Detail</Text>
      <View style={styles.modalDetailContainer}>
        <Text style={styles.modalDetailTitle}>Are you sure you want to delete this task?</Text>
        <Text style={styles.modalDetailTask}>{selectedTask?.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button title='Cancel' onPress={onHandleCancel}/>
        <Button title='Delete' onPress={onHandleDelete} color='red'/>
      </View>
    </View>
  </Modal>
  )
}

export default TaskModal