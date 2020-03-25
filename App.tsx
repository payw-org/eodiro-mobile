import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import LecturesScreen from '@/screens/lectures/LecturesScreen'
import { Ionicons } from '@expo/vector-icons'
import SquareScreen from '@/screens/square/SquareScreen'

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
          component={LecturesScreen}
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
                  name="ios-search"
                  size={props.size}
                  color={props.color}
                />
              )
            },
          }}
        />
        <Tab.Screen
          name="Square"
          component={SquareScreen}
          options={{
            title: '빼빼로 광장',
            tabBarIcon: (props) => {
              return (
                <Ionicons
                  name="ios-people"
                  size={props.size}
                  color={props.color}
                />
              )
            },
          }}
        />
        {/* <Tab.Screen name="More" component={} /> */}
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
