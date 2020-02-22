import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import LecturesScreen from '@/screens/lectures/LecturesScreen'

enableScreens()

type TabParamList = {
  Vacant: undefined
  Lectures: undefined
  Square: undefined
  More: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Vacant" component={} /> */}
        <Tab.Screen name="Lectures" component={LecturesScreen} />
        {/* <Tab.Screen name="Square" component={} />
        <Tab.Screen name="More" component={} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
