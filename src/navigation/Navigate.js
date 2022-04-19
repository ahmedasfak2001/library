/* ===================================import all the necessary items ===================================*/
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* ===================================import all the screens ===================================*/
import StudentLogin from '../screens/student/StudentLogin';
import StudentDashboard from '../screens/student/StudentDashboard';
import StudentSemPageDetails from '../screens/student/StudentSemPageDetails';
import StudentBook from '../screens/student/StudentBook';

const Stack = createNativeStackNavigator();
const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StudentLogin" options={{ headerShown: false, }} component={StudentLogin} />
        <Stack.Screen name="StudentDashboard" options={{ headerShown: false, }} component={StudentDashboard} />
        <Stack.Screen name="StudentSemPageDetails" options={{ headerShown: false, }} component={StudentSemPageDetails} />
        <Stack.Screen name="StudentBook" options={{ headerShown: false, }} component={StudentBook} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigate