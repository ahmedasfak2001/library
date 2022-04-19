import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentLogin from '../screens/student/StudentLogin';
const Stack = createNativeStackNavigator();
const Navigate = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="StudentLogin"  options={{
                    headerShown: false,
                }} component={StudentLogin}/>
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigate