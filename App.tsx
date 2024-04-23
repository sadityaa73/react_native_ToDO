import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddToDo from './components/addToDo';
import Tabs from './components/Tabs';
import ToDo from './components/ToDo';
function App() {
  let [taskText] = React.useState([]);
  let [Tab, setTab] = React.useState('');

  const TaskText = (val: string) => {
    taskText.push(val);
    console.log('val in parent', val);
  };
  const SelectedTab = (tab: string) => {
    setTab(tab);
    console.log('selected tab:', Tab);
  };
  return (
    <View style={Style.mainContainer}>
      <View style={Style.AppHeading}>
        <Text style={Style.HeadingText}>Daily To-Do's</Text>
      </View>
      <AddToDo TaskText={TaskText} />
      <Tabs SelectedTab={SelectedTab} />
      <ToDo Tab={Tab} taskText={taskText} />
    </View>
  );
}

const Style = StyleSheet.create({
  mainContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AppHeading: {
    margin: 5,
    paddingTop: 15,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadingText: {
    fontSize: 25,
    fontWeight: 'bold',
    textShadowRadius: 5,
    textShadowColor: 'white',
  },
});

export default App;
