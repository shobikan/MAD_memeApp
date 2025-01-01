import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const MemeList = ({ onItemPress }) => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch memes from Imgflip API
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await axios.get('https://api.imgflip.com/get_memes');
        if (response.data.success) {
          setMemes(response.data.data.memes);
        } else {
          console.error('Failed to fetch memes:', response.data.error_message);
        }
      } catch (error) {
        console.error('Error fetching memes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMemes();
  }, []);

  const renderMeme = ({ item }) => (
    <TouchableOpacity style={styles.memeContainer} onPress={onItemPress}>
      <Image source={{ uri: item.url }} style={styles.memeImage} />
      <Text style={styles.memeTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading memes...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={memes}
      renderItem={renderMeme}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  memeContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  memeImage: {
    width: 300,
    height: 200,
    borderRadius: 5,
  },
  memeTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MemeList;