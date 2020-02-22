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

type LecturesHomeProps = {
  navigation: LecturesScreenNavigationProp
}

const LecturesHome: React.FC<LecturesHomeProps> = ({ navigation }) => {
  const [lectures, setLectures] = useState([])
  const [isFirstLoading, setIsFirstLoading] = useState(true)
  const [isMoreLoading, setIsMoreLoading] = useState(false)

  useEffect(() => {
    axios({
      url: `https://api2.eodiro.com/2020/1/서울/lectures`,
      method: 'get',
    }).then((res) => {
      setLectures(res.data)
      setIsFirstLoading(false)
    })
  }, [])

  function loadMore() {
    setIsMoreLoading(true)
    axios({
      url: `https://api2.eodiro.com/2020/1/서울/lectures`,
      method: 'get',
      params: {
        offset: lectures.length,
      },
    })
      .then((res) => {
        setLectures([...lectures, ...res.data])
      })
      .finally(() => {
        setIsMoreLoading(false)
      })
  }

  return (
    // <ScrollView
    //   style={{
    //     backgroundColor: '#f5f6f8',
    //   }}
    //   onScroll={({ nativeEvent }) => {
    //     const { layoutMeasurement, contentOffset, contentSize } = nativeEvent
    //     const isReachEnd =
    //       layoutMeasurement.height + contentOffset.y >= contentSize.height
    //     if (isReachEnd && !isMoreLoading) {
    //       loadMore()
    //     }
    //   }}
    //   scrollEventThrottle={400}
    // >
    <Scaffold headerTitle="Lectures">
      <ActivityIndicator
        animating={isFirstLoading}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: Dimensions.get('screen').height / 2 - 100,
        }}
      />
      <TextInput
        placeholder="Search"
        style={{
          backgroundColor: '#fff',
          fontSize: 17,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 15,
          borderRadius: 8,
          padding: 10,
          borderWidth: 1,
          borderColor: '#00000015',
        }}
      />
      {lectures.map((lecture, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            key={index}
            onPress={() => {
              navigation.push('Info', {
                lecture,
              })
            }}
            style={{
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#00000015',
              padding: 15,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontWeight: '700',
                fontSize: 15,
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
      <ActivityIndicator
        animating={isMoreLoading}
        style={{
          marginTop: 10,
          marginBottom: 20,
        }}
      />
    </Scaffold>
    // </ScrollView>
  )
}

export default LecturesHome
