import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import yelp from '../../services/yelp';

const HomeScreen = () => {
  const [restaurant, setRestaurant] = useState('Initialization');

  const getRestaurantDetailById = async () => {
    var response = await yelp.get(`/test`, {});
    if (response) {
      setRestaurant(response.data);
    }
  };

  useEffect(() => {
    getRestaurantDetailById();
  }, []);

  return <Text style={styles.text}>{restaurant}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    paddingTop: "15%",
  },
});

export default HomeScreen;
