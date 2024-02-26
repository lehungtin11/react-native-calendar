import React, {useState} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');

  // Mock events
  const events = {
    '2024-02-26': {marked: true, dotColor: 'blue', events: ['Appointment', 'Webinar']},
    // Add more dates and events as needed
  };

  return (
    <View style={styles.container}>
      <View style={styles.smallCalendarContainer}>
        <Text>Upcoming Events</Text>
        <Calendar
          current={'2024-02-25'}
          monthFormat={'yyyy MM'}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={events}
          markingType={'multi-dot'}
          theme={{
            calendarBackground: 'transparent',
            textSectionTitleColor: 'black',
            todayTextColor: 'red',
            dayTextColor: 'blue',
            arrowColor: 'green',
          }}
          style={styles.smallCalendar}
        />
      </View>
      <View style={styles.largeCalendarContainer}>
        <Calendar
          current={'2024-02-25'}
          monthFormat={'yyyy MM'}
          onDayPress={() => {
            navigation.navigate('Dummy'); // Navigate to the DummyScreen
          }}
          style={styles.largeCalendar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  smallCalendarContainer: {
    flex: 1,
  },
  largeCalendarContainer: {
    flex: 2,
  },
  smallCalendar: {
    marginBottom: 10,
  },
  largeCalendar: {},
});

export default HomeScreen;
