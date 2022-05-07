import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Markers = ({ text }) => {
    return (
        <View style={styles.base}>
            <View style={styles.baseTop} />
            <View style={styles.baseBottom}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};
//styles for our custom marker.
const styles = StyleSheet.create({
    base: {
        transform: [{ rotate: '-90deg' }],
    },
    baseTop: {
        borderBottomWidth: 15,
        borderBottomColor: 'red',
        borderLeftWidth: 22,
        borderLeftColor: 'transparent',
        borderRightWidth: 22,
        borderRightColor: 'transparent',
        height: 0,
        width: 0,
        left: 0,
        top: -15,
        position: 'absolute',
    },
    baseBottom: {
        backgroundColor: 'red',
        height: 30,
        width: 45,
    },
    text: {
        textAlign: 'center',
        transform: [{ rotate: '90deg' }],
        color: '#fff',
    },
});

export default Markers;
