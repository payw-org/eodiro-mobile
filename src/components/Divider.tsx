import React from 'react'
import { View } from 'react-native'

type DividerProps = {
  indent?: number
  height?: number
}

const Divider: React.FC<DividerProps> = ({ indent = 20, height = 0.5 }) => {
  return (
    <View
      style={{
        height,
        backgroundColor: '#e8e8e8',
        marginLeft: indent,
      }}
    />
  )
}

export default Divider
