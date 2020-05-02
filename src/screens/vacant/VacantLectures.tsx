import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import {
  VacantScreenNavigationProp,
  VacantScreenParamList,
} from './VacantScreen'

import Axios from 'axios'
import Divider from '@/components/Divider'
import EodiroColors from '@/modules/themes/eodiro-colors'
import ListItem from '@/components/ListItem'

export type Lecture = {
  name: string
  professor: string
  start_h: number
  start_m: number
  end_h: number
  end_m: number
}

export type Classroom = {
  classroom_number: string
  lectures: Lecture[]
}

async function fetchClassrooms(buildingNumber: number) {
  const response = await Axios.get(
    `https://api2.eodiro.com/vacant/2020/1/서울/buildings/${buildingNumber}/classrooms?day=mon`
  )

  console.log(response.data)

  return response.data as Classroom[]
}

type VacantLecturesRouteProp = RouteProp<VacantScreenParamList, 'Classrooms'>

const VacantLectures: React.FC = () => {
  const navigation = useNavigation<VacantScreenNavigationProp>()
  const route = useRoute<VacantLecturesRouteProp>()

  navigation.setOptions({
    title: route.params.buildingNumber.toString(),
  })

  const [isLoading, setIsLoaindg] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const [classrooms, setClassrooms] = useState<Classroom[]>([])

  useEffect(() => {
    async function loadFirst() {
      const classrooms = await fetchClassrooms(route.params.buildingNumber)

      setClassrooms(classrooms)
      setIsLoaindg(false)
    }

    setIsLoaindg(true)
    loadFirst()
  }, [])

  return (
    <ScrollView
      style={{
        backgroundColor: EodiroColors.white,
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : classrooms.length === 0 ? (
        <Text>강의실이 없습니다.</Text>
      ) : (
        <ClassroomList classrooms={classrooms} />
      )}
    </ScrollView>
  )
}

export default VacantLectures

type ClassroomListProps = {
  classrooms: Classroom[]
}

const ClassroomList: React.FC<ClassroomListProps> = ({ classrooms }) => {
  return (
    <>
      {classrooms.map((classroom) => (
        <View>
          <ClassroomItem
            classroom={classroom}
            key={classroom.classroom_number}
          />
          <Divider />
        </View>
      ))}
    </>
  )
}

type ClassroomItemProps = {
  classroom: Classroom
}

const ClassroomItem: React.FC<ClassroomItemProps> = ({ classroom }) => {
  const navigation = useNavigation<VacantScreenNavigationProp>()

  return (
    <ListItem
      arrow
      onPress={() => {
        navigation.push('Timetable', {
          classroom,
        })
      }}
    >
      <Text
        style={{
          fontSize: 40,
          // lineHeight: 40,
          fontWeight: '700',
          fontVariant: ['tabular-nums'],
        }}
      >
        {classroom.classroom_number}
        <Text
          style={{
            fontSize: 25,
          }}
        >
          호
        </Text>
      </Text>
    </ListItem>
  )
}
