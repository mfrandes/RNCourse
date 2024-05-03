import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* input area */}
      <View >
        <TextInput placeholder='Your course goal' />
        <Button title='Add Goal' />
      </View>
      {/* list of goals */}
      <View>
        <Text>List of goals... </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  }
});
