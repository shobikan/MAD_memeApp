import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { CountContext } from './CountContext';
import MemeList from './MemeList';

export default function HomeScreen({ route }) {
  const { username } = route.params;
  const { count, setCount } = useContext(CountContext);

  const handleItemClick = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>
      <MemeList onItemPress={handleItemClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});