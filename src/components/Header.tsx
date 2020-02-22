import React, { useContext } from 'react'
import { View, Text, Animated } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { ScaffoldContext } from '@/context/ScaffoldContext'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
  const scaffoldContext = useContext(ScaffoldContext)

  return (
    <View>
      <Animated.Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: '700',
          marginTop: getStatusBarHeight() + 70,
          marginBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
          transform: [
            {
              scale: scaffoldContext.scrollY.interpolate({
                inputRange: [-46, -45, 0, 1],
                outputRange: [1.15, 1.15, 1, 1],
              }),
            },
          ],
        }}
      >
        {scaffoldContext.headerTitle}
      </Animated.Text>
    </View>
  )
}

export default Header
