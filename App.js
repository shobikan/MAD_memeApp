import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './App/navigation/Navigation';
import FloatingButton from './App/components/FloatingButton';
import { CountProvider } from './App/components/CountContext';
import { UserProvider } from './App/components/UserContext';

export default function App() {
  return (
    <UserProvider>
      <CountProvider>
        <View style={styles.container}>
          <Navigation />
          <FloatingButton />
        </View>
      </CountProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});