import * as React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

function Tabs(props) {
  return (
    <View style={Style.mainContainer}>
      <View style={Style.TabContainer}>
        <View style={Style.Tabs}>
          <Pressable
            onPress={() => {
              props.SelectedTab('ToDo');
            }}>
            <Text style={Style.TabsText}>To-Do's</Text>
          </Pressable>
        </View>
        <View style={Style.Tabs}>
          <Pressable
            onPress={() => {
              props.SelectedTab('Completed');
            }}>
            <Text style={Style.TabsText}>Completed</Text>
          </Pressable>
        </View>
        <View style={Style.Tabs}>
          <Pressable
            onPress={() => {
              props.SelectedTab('Deleted');
            }}>
            <Text style={Style.TabsText}>Deleted</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabContainer: {
    borderWidth: 1,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '5%',
    width: 320,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#F8F9F9',
  },
  Tabs: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: '60%',
    width: '30%',
    marginLeft: 8,
    borderRadius: 5,
    backgroundColor: '#3498DB',
  },
  TabsText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  TodoContainer: {
    borderWidth: 1,
    borderColor: 'white',
    width: '90%',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15%',
    marginRight: '15%',
    borderRadius: 5,
  },
  todoText: {
    borderWidth: 1,
    // marginLeft: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
    padding: 2,
    fontSize: 18,
    fontWeight: 'bold',
    width: '60%',
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: 'white',
    height: 30,
    width: 30,
    marginLeft: 10,
    borderRadius: 5,
  },
});

export default Tabs;
