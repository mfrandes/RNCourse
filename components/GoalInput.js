import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ addGoalHandler }) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const onBtnPress = () => {
        addGoalHandler(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={enteredGoalText}
                style={styles.textInput}
                placeholder='Your course goal'
                onChangeText={goalInputHandler}
            />
            <Button
                title='Add Goal'
                onPress={onBtnPress}
            />
        </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
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
})