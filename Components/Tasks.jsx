import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './Features/taskslice';

const Tasks = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  console.log('Tasks:', tasks); // Log tasks to check the state

  const handleAddTask = () => {
    if (text.trim()) {
      const now = new Date();
      const formattedDate = `${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}-${now.getFullYear()}`;
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours < 12 ? 'AM' : 'PM'}`;

      const newTask = {
        id: (tasks.length + 1).toString(),
        title: text,
        date: `${formattedDate}, ${formattedTime}`,
      };

      console.log('New Task:', newTask); // Log new task to check if it's correct
      dispatch(addTask(newTask));
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskDate}>{item.date}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.taskList}
      />
      <TextInput
        label="New Task"
        value={text}
        onChangeText={setText}
        style={styles.input}
        mode="outlined"
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  title: {
    color: '#00ADB5',
    fontSize: 28,
    marginBottom: 20,
    padding: 50,
  },
  taskList: {
    width: '100%',
    paddingHorizontal: 20,
  },
  taskItem: {
    backgroundColor: '#393E46',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00ADB5',
    marginBottom: 5,
    borderRadius: 5,
  },
  taskTitle: {
    color: '#EEEEEE',
    fontSize: 18,
  },
  taskDate: {
    color: '#BBBBBB',
    fontSize: 14,
  },
  input: {
    width: '90%',
    marginBottom: 10,
    backgroundColor: '#393E46',
  },
});

export default Tasks;
