import { RouteProp, useRoute } from '@react-navigation/native'

import React from 'react'
import { ScrollView } from 'react-native'
import { VacantScreenParamList } from './VacantScreen'

type VacantTimetableRouteProp = RouteProp<VacantScreenParamList, 'Timetable'>

type VacantTimetableProps = {}

const VacantTimetable: React.FC<VacantTimetableProps> = () => {
  const route = useRoute<VacantTimetableRouteProp>()

  console.log(route.params.classroom)

  return <ScrollView></ScrollView>
}

export default VacantTimetable
