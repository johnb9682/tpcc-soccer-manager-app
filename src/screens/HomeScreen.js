import React, {useEffect, useState} from 'react';
import { Text, StyleSheet } from "react-native";
import yelp from "../services/yelp";

const HomeScreen = () => {

  const [restaurant, setRestaurant] = useState({});

  const getRestaurantDetailById = async () => {
      var response = await yelp.get(`/test`, {});
      if (response) {
          console.info(response.data);
          setRestaurant(response.data);
      }
      console.info("getRestaurantDetailById");
      console.info(response);
  };

  useEffect(() => {
      getRestaurantDetailById();
      console.info("useEffect");
  }, []);

  return <Text style={styles.text}>{restaurant}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
