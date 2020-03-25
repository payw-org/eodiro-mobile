import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import axios from 'axios'
import { LecturesScreenNavigationProp } from './LecturesScreen'
import Header from '@/components/Header'
import Scaffold from '@/components/Scaffold'
import dayjs from 'dayjs'
import getSemester from '@/modules/get-semester'
import getState from '@/modules/get-state'

type LecturesHomeProps = {
  navigation: LecturesScreenNavigationProp
}
const LecturesHome: React.FC<LecturesHomeProps> = ({ navigation }) => {
  const [lectures, setLectures] = useState([])
  const [isFirstLoading, setIsFirstLoading] = useState(true)
  const [isMoreLoading, setIsMoreLoading] = useState(false)

  useEffect(() => {
    const now = dayjs()
    const year = now.year()
    const semester = getSemester()
    axios({
      url: `https://api2.eodiro.com/lectures/${year}/${semester}/서울/list`,
      method: 'get',
    }).then((res) => {
      setLectures(res.data)
      setIsFirstLoading(false)
    })
  }, [])

  async function loadMore() {
    if (isMoreLoading) {
      return
    }

    setIsMoreLoading(true)
    console.log('set isMoreLoading true')
    const now = dayjs()
    const year = now.year()
    const semester = getSemester()
    axios({
      url: `https://api2.eodiro.com/lectures/${year}/${semester}/서울/list`,
      method: 'get',
      params: {
        offset: lectures.length,
      },
    })
      .then((res) => {
        setLectures([...lectures, ...res.data])
      })
      .finally(() => {
        setTimeout(() => {
          setIsMoreLoading(false)
        }, 100)
      })
  }

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: '#fff',
        }}
        onScroll={({ nativeEvent }) => {
          const { layoutMeasurement, contentOffset, contentSize } = nativeEvent
          const isReachEnd =
            layoutMeasurement.height + contentOffset.y >= contentSize.height
          if (isReachEnd && !isMoreLoading) {
            loadMore()
          }
        }}
        scrollEventThrottle={400}
        stickyHeaderIndices={[0]}
      >
        <View
          style={{
            backgroundColor: '#fff',
            paddingBottom: 10,
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f1f3',
          }}
        >
          <TextInput
            placeholder="강의명, 학과, 교수, 강의실 등"
            style={{
              backgroundColor: '#f0f1f3',
              fontSize: 17,
              marginLeft: 15,
              marginRight: 15,
              borderRadius: 8,
              padding: 10,
            }}
          />
        </View>
        <ActivityIndicator
          animating={isFirstLoading}
          style={{
            position: 'absolute',
            alignSelf: 'center',
            top: Dimensions.get('screen').height / 2 - 100,
          }}
        />
        <View>
          {lectures.map((lecture, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() => {
                  // navigation.push('Info', {
                  //   lecture,
                  // })
                  navigation.navigate('Info', {
                    lecture,
                  })
                }}
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#f0f1f3',
                  borderWidth: 1,
                  padding: 15,
                  marginLeft: 15,
                  marginRight: 15,
                  marginBottom: 15,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  {lecture.name}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                  }}
                >
                  {lecture.professor}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    color: '#808080',
                  }}
                >
                  {lecture.schedule}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
        <ActivityIndicator
          animating={isMoreLoading}
          style={{
            marginTop: 10,
            marginBottom: 20,
          }}
        />
      </ScrollView>
    </>
  )
}

export default LecturesHome
