import { Alert, Text, View } from 'react-native'
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack'
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler'

import { EodiroStackNavigationScreenOptions } from '@/config/stack-navigator-screen-options'
import { Ionicons } from '@expo/vector-icons'
import LecturesHome from './LecturesHome'
import LecturesInfo from './LecturesInfo'
import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

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
          headerRight: ({ tintColor }) => (
            <TouchableOpacity
              style={{
                marginRight: 10,
                padding: 5,
                paddingLeft: 10,
              }}
              onPress={() => {
                Alert.alert('What')
              }}
            >
              <Ionicons name="ios-search" size={25} color={tintColor} />
            </TouchableOpacity>
          ),
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
