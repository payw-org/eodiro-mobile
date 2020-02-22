import React, { useContext } from 'react'
import { Animated } from 'react-native'
import Header from './Header'
import { ScaffoldContext } from '@/context/ScaffoldContext'

type ScaffoldScrollViewProps = {}

const ScaffoldScrollView: React.FC<ScaffoldScrollViewProps> = ({
  children,
}) => {
  const scaffoldContext = useContext(ScaffoldContext)

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: scaffoldContext.scrollY,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        }
      )}
    >
      <Header />
      {children}
    </Animated.ScrollView>
  )
}

export default ScaffoldScrollView
