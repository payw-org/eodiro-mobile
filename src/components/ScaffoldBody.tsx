import React, { useContext } from 'react'
import ScaffoldScrollView from './ScaffoldScrollView'
import { ScaffoldContext } from '@/context/ScaffoldContext'
import { View, Animated, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

type ScaffoldBodyProps = {
  headerTitle: string
}

const ScaffoldBody: React.FC<ScaffoldBodyProps> = ({
  headerTitle,
  children,
}) => {
  const scaffoldContext = useContext(ScaffoldContext)
  scaffoldContext.setHeaderTitle(headerTitle)

  return (
    <>
      <ScaffoldScrollView>{children}</ScaffoldScrollView>
      <Animated.View
        style={{
          opacity: scaffoldContext.scrollY.interpolate({
            inputRange: [-1, 70, 100, 101],
            outputRange: [0, 0, 1, 1],
          }),
          backgroundColor: '#fff',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: getStatusBarHeight() + 60,
          borderBottomWidth: 1,
          borderBottomColor: '#00000020',
        }}
      >
        <View
          style={{
            paddingTop: getStatusBarHeight(),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            {scaffoldContext.headerTitle}
          </Text>
        </View>
      </Animated.View>
    </>
  )
}

export default ScaffoldBody
