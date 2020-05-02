import { TouchableOpacity, View } from 'react-native'

import EodiroColors from '@/modules/themes/eodiro-colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

type ListItemProps = {
  arrow?: boolean
  onPress?: () => void
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  arrow = false,
  onPress,
}) => {
  const Item = (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          marginRight: 20,
        }}
      >
        {children}
      </View>
      {arrow && (
        <Ionicons
          name="ios-arrow-forward"
          size={20}
          color={EodiroColors.baseGray}
          style={{
            marginRight: 20,
          }}
        />
      )}
    </View>
  )

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{Item}</TouchableOpacity>
  } else {
    return Item
  }
}

export default ListItem
