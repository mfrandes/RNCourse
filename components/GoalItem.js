import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, id, onDeleteHandle }) {

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={onDeleteHandle.bind(this, id)}
                style={({ pressed }) => {
                    return pressed && styles.pressedItem
                }}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        padding: 8,
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5
    }
})