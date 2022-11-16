import { useState } from 'react';
import { Text, View} from 'react-native';
import { AddItem, Task, TaskModal, TaskList } from './components/index';
import {styles} from './utils/styles';

export default function App() {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleTask = () =>{
    setTaskList(((prevTaskList)=>[{id:Math.random().toString(),value:task}, ...prevTaskList]));
    setTask('');
  };

  const onHandleCancel = ()=>{
    setModalVisible(!modalVisible);
  };

  const onHandleDelete = ()=>{
    setTaskList((prevTaskList)=> prevTaskList.filter((item)=>item.id !== selectedTask.id));
    setModalVisible(!modalVisible);

  };

  const onHandleSelected = (item)=>{
    setModalVisible(true);
    setSelectedTask(item);
  }

  const onHandleChange = (text)=>{
    setTask(text)
  }

  const renderItem = ({item})=>(
    <Task item={item} onHandleSelected={onHandleSelected}/>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>Task List</Text>
      <AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      <TaskList renderItem={renderItem} taskList={taskList}  />
      <TaskModal onHandleCancel={onHandleCancel} onHandleDelete={onHandleDelete} selectedTask={selectedTask} modalVisible={modalVisible}/>
    </View>
  );
}

