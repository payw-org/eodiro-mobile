import React from 'react'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import LecturesHome from './LecturesHome'
import LecturesInfo from './LecturesInfo'
import { Ionicons } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { EodiroStackNavigationScreenOptions } from '@/config/stack-navigator-screen-options'

export type LecturesScreenParamList = {
  Home: undefined
  Info: {
    lecture: any
  }
}
export type LecturesScreenNavigationProp = StackNavigationProp<
  LecturesScreenParamList
>
const LecturesScreenStack = createStackNavigator<LecturesScreenParamList>()

const LecturesScreen: React.FC = () => {
  return (
    <LecturesScreenStack.Navigator
      screenOptions={EodiroStackNavigationScreenOptions}
    >
      <LecturesScreenStack.Screen
        name="Home"
        component={LecturesHome}
        options={{
          title: '강의 검색',
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
      />
      <LecturesScreenStack.Screen
        name="Info"
        component={LecturesInfo}
        options={{
          title: '자세히',
        }}
      />
    </LecturesScreenStack.Navigator>
  )
}

export default LecturesScreen
