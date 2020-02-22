import React, { createContext, useState } from 'react'
import { Animated } from 'react-native'

type ScaffoldContextProps = {
  scrollY: Animated.Value
  setScrollY: React.Dispatch<React.SetStateAction<Animated.Value>>
  headerTitle: string
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>
}

export const ScaffoldContext = createContext({} as ScaffoldContextProps)

export const ScaffoldProvider: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  const [headerTitle, setHeaderTitle] = useState('')

  return (
    <ScaffoldContext.Provider
      value={{
        scrollY,
        setScrollY,
        headerTitle,
        setHeaderTitle,
      }}
    >
      {children}
    </ScaffoldContext.Provider>
  )
}
