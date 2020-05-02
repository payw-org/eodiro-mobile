import { Ionicons } from '@expo/vector-icons'
import LecturesScreen from '@/screens/lectures/LecturesScreen'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import VacantScreen from '@/screens/vacant/VacantScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'

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
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ff3852',
        }}
      >
        <Tab.Screen
          name="Vacant"
          component={VacantScreen}
          options={{
            title: '빈 강의실',
            tabBarIcon: (props) => {
              return (
                <Ionicons
                  name="ios-time"
                  size={props.size}
                  color={props.color}
                />
              )
            },
          }}
        />
        <Tab.Screen
          name="Lectures"
          component={LecturesScreen}
          options={{
            title: '강의 검색',
            tabBarIcon: (props) => {
              return (
                <Ionicons
                  name="ios-paper"
                  size={props.size}
                  color={props.color}
                />
              )
            },
          }}
        />
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
