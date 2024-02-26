import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { CalendarList } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EventItem from "../Components/EventItem";
import NoEventsView from "../Components/NoEventsView";
import { getFormattedDate, varColor, dynamicEvents } from "../Utils";

const CalendarScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [events, setEvents] = useState([]);
  const [viewAllEvents, setViewAllEvents] = useState(false);
  const [displayDate, setDisplayDate] = useState("");

  useEffect(() => {
    setEvents(dynamicEvents);
  }, []);

  const calendar_events = events.reduce((acc, event) => {
    acc[event.date] = acc[event.date] || {
      marked: true,
      dotColor:
        event.date === getFormattedDate(new Date())
          ? varColor.dark.blue
          : varColor.light.orange,
      customStyles: {
        container: {
          backgroundColor:
            event.date === getFormattedDate(new Date())
              ? varColor.dark.blue
              : varColor.light.orange,
        },
      },
      events: [],
    };
    acc[event.date].events.push(event.id);
    return acc;
  }, {});

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setViewAllEvents(false); // Reset view all events when a new day is selected

    // Format the selected date to be more readable, e.g., "February 26, 2024"
    const formattedDate = new Date(day.dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDisplayDate(formattedDate); // Update the display date
  };

  const filteredEvents = selectedDate
    ? events.filter((event) => event.date === selectedDate)
    : [];

  // Function to handle the View All Events button press
  const handleViewAllEvents = () => {
    setViewAllEvents(true); // Toggle the view all events state
  };

  return (
    <SafeAreaView style={styles.container}>
      <CalendarList
        horizontal={true}
        pagingEnabled={true}
        onVisibleMonthsChange={(months) => {}}
        current={Date()}
        onDayPress={onDayPress}
        markingType={"custom"}
        markedDates={calendar_events}
        theme={{
          "stylesheet.calendar.header": {
            header: {
              borderBottomWidth: 0,
            },
          },
          todayDotColor: "transparent",
          calendarBackground: "#fff",
          todayTextColor: varColor.light.text,
          todayBackgroundColor: varColor.dark.blue,
          dayTextColor: varColor.text,
          monthTextColor: varColor.dark.blue,
          textMonthFontWeight: "bold",
          textMonthFontSize: 20,
        }}
        hideArrows={true}
      />
      <View style={styles.bottomCalendar}>
        <View style={styles.eventsHeader}>
          <Text style={styles.upcomingEventsTitle}>
            <Icon name="calendar-clock" size={20} color={varColor.dark.blue} />
            Upcoming Events
          </Text>
          <TouchableOpacity
            onPress={handleViewAllEvents}
            style={styles.viewAllButton}
          >
            <Text style={styles.viewAllButtonText}>View All</Text>
          </TouchableOpacity>
        </View>
        {(selectedDate && (
          <Text style={styles.selectedDateText}>{displayDate}</Text>
        )) || <Text></Text>}

        {filteredEvents.length > 0 || (viewAllEvents && events.length > 0) ? (
          <FlatList
            initialNumToRender={10}
            data={viewAllEvents ? events : filteredEvents}
            renderItem={({ item }) => (
              <EventItem
                data={{
                  ...item,
                }}
                onPress={() =>
                  navigation.navigate("DetailEventScreen", {
                    ...item,
                    ClientProfile: {
                      clientName: "Johan Le",
                      clientEmail: "hungtin640@gmail.com",
                      clientPhoneNumber: "0901306730",
                    },
                  })
                }
                onCall={() => navigation.navigate("VideoCallScreen")}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <NoEventsView />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomCalendar: {
    flex: 2,
    padding: 10,
    backgroundColor: "#F3F4F6",
  },
  eventsHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  viewAllButton: {
    backgroundColor: "#0F4C81",
    padding: 8,
    borderRadius: 5,
  },
  viewAllButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  selectedDateText: {
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 10,
    paddingBottom: 25,
  },
  upcomingEventsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F4C81",
  },
});

export default CalendarScreen;
