import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EventItem = ({ data, onPress, onCall }) => {
  return (
    <>
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.eventItem}>
        {data.type === "appointment" && (
          <Image
            source={require('../../assets/me.jpg')}
            style={styles.avatar}
          />
        )|| <View style={styles.eventIndicator} />}
        
        <View style={{ flex: 1 }}>
          <Text style={styles.eventTitle}>{data.title}</Text>
          <Text style={styles.eventTime}>{data.start} - {data.end}</Text>
        </View>
      </View>
    </TouchableOpacity>
    {data.type === "appointment" && (
      <TouchableOpacity style={styles.wrapperEventIcon} onPress={() => onCall()}>
        <Icon
          name="video"
          size={20}
          color="#FFF"
          style={styles.eventIcon}
        />
      </TouchableOpacity>
    )}
  </>
  );
};


const styles = StyleSheet.create({
    avatar: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: "#FF9501",
      marginRight: 10,
    },
    wrapperEventIcon: {
      position: "absolute",
      right: 0,
      top: 0,
    },
    eventIcon: {
      position: "absolute",
      right: 8,
      top: 10,
      padding: 6,
      borderColor: "#0F4C81",
      borderWidth: 1,
      borderRadius: 18,
      backgroundColor: "#0F4C81",
      overflow: "hidden",
    },
    eventItem: {
      flexDirection: "row",
      padding: 10,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    eventIndicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "#FF9501",
      marginRight: 10,
      alignSelf: "center",
    },
    eventTitle: {
      fontWeight: "bold",
    },
    eventTime: {
      color: "#9A9A9A",
    },
  });

export default EventItem;
