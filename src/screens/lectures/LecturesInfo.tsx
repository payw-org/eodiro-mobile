import React from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import {
  LecturesScreenParamList,
  LecturesScreenNavigationProp,
} from './LecturesScreen'

type LecturesInfoProps = {
  navigation: LecturesScreenNavigationProp
}
type LecturesInfoRouteProp = RouteProp<LecturesScreenParamList, 'Info'>

const LecturesInfo: React.FC<LecturesInfoProps> = ({ navigation }) => {
  const route = useRoute<LecturesInfoRouteProp>()
  const lecture = route.params.lecture

  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          padding: 20,
          paddingTop: 10,
        }}
      >
        <View
          style={{
            alignSelf: 'flex-end',
            marginBottom: 10,
          }}
        >
          <Button
            title="닫기"
            onPress={() => {
              navigation.goBack()
            }}
          />
        </View>
        <Text>
          {lecture.year}년 {lecture.semester}학기 {lecture.campus}캠퍼스
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '700',
          }}
        >
          {lecture.name}
        </Text>
        <Text>{lecture.professor}</Text>
        <Text>{lecture.college}</Text>
        {lecture.subject !== '' && <Text>{lecture.subject}</Text>}
        {lecture.building !== '' && (
          <Text>
            {lecture.building ? `${lecture.building}관` : ''}
            {lecture.room ? ` ${lecture.room}호` : ''}
          </Text>
        )}
        <Text>{lecture.code}</Text>
        <Text>{lecture.credit}학점</Text>
        {lecture.note !== '' && <Text>{lecture.note}</Text>}
      </View>
    </ScrollView>
  )
}

export default LecturesInfo
