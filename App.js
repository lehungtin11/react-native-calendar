import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from './src/Screens/CalendarScreen';
import DetailEventScreen from './src/Components/DetailEventScreen';
import VideoCallScreen from './src/Screens/VideoCallScreen';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={CalendarScreen} />
        <Stack.Screen options={{headerShown: false}} name="DetailEventScreen" component={DetailEventScreen} />
        <Stack.Screen options={{headerShown: false}} name="VideoCallScreen" component={VideoCallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
