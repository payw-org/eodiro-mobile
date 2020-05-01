import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack'

import { EodiroStackNavigationScreenOptions } from '@/config/stack-navigator-screen-options'
import React from 'react'
import VacantHome from './VacantHome'

export type VacantScreenParamList = {
  Buildings: undefined
  Classrooms: {
    building: number
  }
}

export type VacantScreenNavigationProp = StackNavigationProp<
  VacantScreenParamList
>

const VacantScreenStack = createStackNavigator<VacantScreenParamList>()

const VacantScreen: React.FC = () => {
  return (
    <VacantScreenStack.Navigator
      screenOptions={EodiroStackNavigationScreenOptions}
    >
      <VacantScreenStack.Screen
        name="Buildings"
        component={VacantHome}
        options={{
          title: '빈 강의실',
        }}
      />
    </VacantScreenStack.Navigator>
  )
}

export default VacantScreen
