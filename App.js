import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString()
      }
    ])
  }

  return (
    <View style={styles.appContainer}>
      {/* input area */}
      <GoalInput addGoalHandler={addGoalHandler} />
      {/* list of goals */}
      <View style={styles.goalsContainer}>
        {/*ScrollView is USED TO SCROLL can be configured differentlly for ios and android 
        still needs to be in a view becouse its only for scroll
        this not good for long lists, it will load all elements and can create performance issues
        better solution is flat list
        */}
        {/* <ScrollView >
        
        the following will not recognise borderRadius on IOS beouse in IOS
        the Text element doesent support borderRadius
        the fix is to wrap the text in a view and give view borderRadius
        however the text will not enharit propoertis from parrnt such as collor, 
        {courseGoals.map((oneGoal, key) => (
          <Text style={styles.goalItem} key={oneGoal + key}>{oneGoal}</Text>
        ))}
        
          {/* solution:
          {courseGoals.map((oneGoal, key) => (
            <View style={styles.goalItem} key={oneGoal + key}>
              <Text style={styles.goalText}>{oneGoal}</Text>
            </View>
          ))}
        </ScrollView> */}

        {/* Using FlatList 
          data - takes the array that needs to be displayed
          renderItem - takes a function that will tell how to display items in data
        */}
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem itemData={itemData} />
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />

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
  goalsContainer: {
    flex: 4
  }
});
