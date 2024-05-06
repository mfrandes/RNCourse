import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, id, onDeleteHandle }) {

    return (
        <Pressable onPress={onDeleteHandle.bind(this, id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
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
})