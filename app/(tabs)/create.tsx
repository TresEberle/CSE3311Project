import { View, Text, ScrollView, TextInput, Button, Alert, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Create = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      Alert.alert('Task Created', 'Your task has been sucessfully created!');
      setTask(''); //clears the stuff the user inputs
    } else {
      Alert.alert('Error', 'Please enter a task.');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task by index
    Alert.alert('Task Deleted', 'Your task has been deleted.');
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#161622', height: '100%' }}>
      <StatusBar barStyle="light-content" backgroundColor="#161622" />
      <ScrollView>
        <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 10 }}>
          {/* Title with background and underline */}
          <View
            style={{
              backgroundColor: '#161622', // Background color for the title section
              paddingVertical: 10, // Vertical padding for spacing
              width: '100%',
              borderBottomWidth: 1, // Thickness of the line
              borderBottomColor: 'lightblue', // Color of the contrasting line
              alignItems: 'center', // Center the text
              paddingHorizontal: 10, // Padding inside the box
            }}
          >
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
              {/*Stylistic stuff for the title. */}
              Task Manager
            </Text>
          </View>
          <TextInput
            //style for the input field on creating the task
            style={{
              height: 40,
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 5,
              paddingLeft: 10,
              marginTop: 20,
              color: 'white',
            }}
            placeholder="Enter task here..."
            placeholderTextColor="lightgray"
            value={task}
            onChangeText={setTask}
          />
          <Button title="Create Task" onPress={handleSubmit} color="white" />
          
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
            <Ionicons name="list-outline" size={26} color="white" />
            <Text style={{ color: 'white', fontSize: 22, marginLeft: 8 }}>Task List:</Text>
          </View>

          {tasks.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
                marginTop: 10,
                backgroundColor: 'darkgray',
                borderRadius: 5,
              }}
            >
              <Text style={{ color: 'white' }}>{item}</Text>
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;