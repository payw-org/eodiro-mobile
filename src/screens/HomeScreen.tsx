import { ScrollView, Text, View } from 'react-native'

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreenStack = createStackNavigator()

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
        }}
      />
    </HomeScreenStack.Navigator>
  )
}

export default HomeScreen
