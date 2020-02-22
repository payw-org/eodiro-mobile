import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreenStack = createNativeStackNavigator()

const HomeScreenComponent: React.FC = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Text>Home Screen</Text>
    </ScrollView>
  )
}

const HomeScreen: React.FC = () => {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="Home"
        component={HomeScreenComponent}
        options={{
          title: 'eodiro',
          headerLargeTitle: true,
          headerLargeTitleStyle: {
            fontFamily: '',
          },
        }}
      />
    </HomeScreenStack.Navigator>
  )
}

export default HomeScreen
