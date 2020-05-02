import React, { useEffect, useState } from 'react'
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack'
import VacantLectures, { Classroom } from './VacantLectures'

import { EodiroStackNavigationScreenOptions } from '@/config/stack-navigator-screen-options'
import VacantHome from './VacantHome'
import VacantTimetable from './VacantTimetable'

export type VacantScreenParamList = {
  Buildings: undefined
  Classrooms: {
    buildingNumber: number
  }
  Timetable: {
    classroom: Classroom
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
      <VacantScreenStack.Screen name="Classrooms" component={VacantLectures} />
      <VacantScreenStack.Screen name="Timetable" component={VacantTimetable} />
    </VacantScreenStack.Navigator>
  )
}

export default VacantScreen
