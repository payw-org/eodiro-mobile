import React, { createContext, useState } from 'react'
import Header from './Header'
import { Animated } from 'react-native'
import ScaffoldScrollView from './ScaffoldScrollView'
import ScaffoldBody from './ScaffoldBody'
import { ScaffoldProvider } from '@/context/ScaffoldContext'

type ScaffoldProps = {
  headerTitle: string
  onScrollEnds: () => void
}

const Scaffold: React.FC<ScaffoldProps> = ({ headerTitle, children }) => {
  return (
    <ScaffoldProvider>
      <ScaffoldBody headerTitle={headerTitle}>{children}</ScaffoldBody>
    </ScaffoldProvider>
  )
}

export default Scaffold
