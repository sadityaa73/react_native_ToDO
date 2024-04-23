import * as React from 'react';
import {useState} from 'react';
import {View, Alert, Text, StyleSheet, TextInput, Button} from 'react-native';

let index = 0;
function AddTodo(props) {
  let [text, setText] = useState('');

  return (
    <View style={Style.mainContainer}>
      <TextInput
        placeholder="Add To-Do"
        placeholderTextColor={'green'}
        textAlign="center"
        style={Style.addText}
        onChangeText={(text: string) => {
          setText(text);
          console.log(text);
        }}
      />
      <Button
        title="Add"
        onPress={() => {
          console.log('text:', text);
          if (text !== '') {
            props.TaskText({
              id: index++,
              todoText: text,
              compeleted: false,
              deleted: false,
            });
          } else {
            Alert.alert('please first enter some text first!');
          }
          setText('');
        }}
      />
    </View>
  );
}

const Style = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    borderColor: 'green',
    width: '100%',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '15%',
  },
  addText: {
    borderWidth: 1,
    width: '70%',
    height: '80%',
    borderRadius: 5,
  },
});

export default AddTodo;
