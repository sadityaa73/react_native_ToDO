import * as React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable, Image} from 'react-native';

function Todo(props) {
  console.log("todo's:", props.Tab);
  console.log("todo's text:", props.taskText);
  const result = props.taskText.filter(item => {
    return item.compeleted === false && item.deleted === false;
  });
  if (props.Tab === 'ToDo') {
    const result = props.taskText.filter(item => {
      return item.compeleted === false && item.deleted === false;
    });
    console.log('data', result);
    return (
      <FlatList
        data={result}
        renderItem={({item}) => (
          <View style={Style.TodoContainer}>
            <Text style={Style.TodoText}>{item.todoText}</Text>
            <View style={Style.ButtonContainer}>
              <Pressable
                onPress={() => {
                  item.compeleted = true;
                }}>
                <Image
                  source={require('./assets/checked.png')}
                  style={Style.btnImage}
                />
              </Pressable>
            </View>
            <View style={Style.ButtonContainer}>
              <Pressable
                onPress={() => {
                  item.deleted = true;
                }}>
                <Image
                  source={require('./assets/trash.png')}
                  style={Style.btnImage}
                />
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    );
  }
  if (props.Tab === 'Completed') {
    const result = props.taskText.filter(item => {
      return item.compeleted === true;
    });
    return (
      <FlatList
        data={result}
        renderItem={({item}) => (
          <View style={Style.TodoContainer}>
            <Text style={Style.TodoTextCompleted}>{item.todoText}</Text>
            <View style={Style.ButtonContainer}>
              <Pressable
                onPress={() => {
                  item.compeleted = false;
                }}>
                <Image
                  source={require('./assets/revert.png')}
                  style={Style.btnImage}
                />
              </Pressable>
            </View>
          </View>
        )}
      />
    );
  }
  if (props.Tab === 'Deleted') {
    const result = props.taskText.filter(item => {
      return item.deleted === true;
    });
    return (
      <FlatList
        data={result}
        renderItem={({item}) => (
          <View style={Style.TodoContainer}>
            <Text style={Style.TodoTextDeleted}>{item.todoText}</Text>
            <View style={Style.ButtonContainer}>
              <Pressable
                onPress={() => {
                  item.deleted = false;
                }}>
                <Image
                  source={require('./assets/revert.png')}
                  style={Style.btnImage}
                />
              </Pressable>
            </View>
          </View>
        )}
      />
    );
  }
  return (
    <FlatList
      data={result}
      renderItem={({item}) => (
        <View style={Style.TodoContainer}>
          <Text style={Style.TodoText}>{item.todoText}</Text>
          <View style={Style.ButtonContainer}>
            <Pressable
              onPress={() => {
                item.compeleted = true;
              }}>
              <Image
                source={require('./assets/checked.png')}
                style={Style.btnImage}
              />
            </Pressable>
          </View>
          <View style={Style.ButtonContainer}>
            <Pressable
              onPress={() => {
                item.deleted = true;
              }}>
              <Image
                source={require('./assets/trash.png')}
                style={Style.btnImage}
              />
            </Pressable>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
}

const Style = StyleSheet.create({
  TodoContainer: {
    borderColor: 'black',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 5,
    borderRadius: 5,
    flex: 0,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flexDirection: 'row',
  },
  TodoText: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    width: '75%',
    textAlign: 'center',
    height: '100%',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  TodoTextCompleted: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    width: '75%',
    textAlign: 'center',
    height: '100%',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'green',
  },
  TodoTextDeleted: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    width: '75%',
    textAlign: 'center',
    height: '100%',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  ButtonContainer: {
    // borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flex: 0,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    width: 30,
    height: 30,
  },
  btnImage: {
    flex: 0,
    justifyContent: 'center',
    alignContent: 'flex-start',
    width: 30,
    height: 30,
    objectFit: 'cover',
  },
});
export default Todo;
