import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Main application component with counter functionality
 */
export default function App()
{
    // Local variables
    const [count, setCount] = useState(0);

    /**
     * Increment counter by 1
     */
    const handleIncrement = () =>
    {
        setCount(count + 1);
    };

    /**
     * Reset counter to 0
     */
    const handleReset = () =>
    {
        setCount(0);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.counterText}>{count}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleIncrement}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.resetButton]}
                    onPress={handleReset}
                >
                    <Text style={styles.buttonText}>Сброс</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterText: {
        fontSize: 72,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        minWidth: 100,
        alignItems: 'center',
    },
    resetButton: {
        backgroundColor: '#FF3B30',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
