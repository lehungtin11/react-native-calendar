import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NoEventsView = () => (
  <View style={styles.noEventsView}>
    <Icon name="calendar-remove" size={24} color="#666" />
    <Text style={styles.noEventsText}>No events found</Text>
  </View>
);

const styles = StyleSheet.create({
    noEventsView: {
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: "#0F4C81",
      padding: 60,
    },
    noEventsText: {
      fontSize: 16,
      color: "#666",
    }
  });

export default NoEventsView;
