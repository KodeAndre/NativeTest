import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function testButton() {
    const [hidden, setHidden] = useState(false);
    const changeStatusBarVisibility = () => setHidden(prevHidden => !prevHidden);
    
    return (
        <View>
            <StatusBar style="light" hidden={hidden} />
            <Button title="Click me" color="#faa" onPress={changeStatusBarVisibility} />
        </View>
        );
    }

