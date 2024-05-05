import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals(curentCourseGoals => [...curentCourseGoals, enteredGoalText])
  }

  return (
    <View style={styles.appContainer}>
      {/* input area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
        />
        <Button
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>
      {/* list of goals */}
      <View style={styles.goalsContainer}>
        {/* USED TO SCROLL can be configured differentlly for ios and android 
        still needs to be in a view becouse its only for scroll
        this not good for long lists, it will load all elements and can create performance issues
        better solution is flat list
        */}
        <ScrollView >
          {/* 
        the following will not recognise borderRadius on IOS beouse in IOS
        the Text element doesent support borderRadius
        the fix is to wrap the text in a view and give view borderRadius
        however the text will not enharit propoertis from parrnt such as collor, 
        {courseGoals.map((oneGoal, key) => (
          <Text style={styles.goalItem} key={oneGoal + key}>{oneGoal}</Text>
        ))}
        */}
          {/* solution: */}
          {courseGoals.map((oneGoal, key) => (
            <View style={styles.goalItem} key={oneGoal + key}>
              <Text style={styles.goalText}>{oneGoal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "70%",
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  goalText: {
    color: 'white'
  }
});
