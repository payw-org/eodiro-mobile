import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import LecturesHome from './LecturesHome'
import LecturesInfo from './LecturesInfo'

export type LecturesScreenParamList = {
  Home: undefined
  Info: {
    lecture: any
  }
}

export type LecturesScreenNavigationProp = NativeStackNavigationProp<
  LecturesScreenParamList
>

const LecturesScreenStack = createNativeStackNavigator<
  LecturesScreenParamList
>()

const LecturesScreen: React.FC = () => {
  return (
    <LecturesScreenStack.Navigator
      screenOptions={{
        stackPresentation: 'modal',
      }}
    >
      <LecturesScreenStack.Screen
        name="Home"
        component={LecturesHome}
        options={{
          headerShown: false,
        }}
      />
      <LecturesScreenStack.Screen name="Info" component={LecturesInfo} />
    </LecturesScreenStack.Navigator>
  )
}

export default LecturesScreen
