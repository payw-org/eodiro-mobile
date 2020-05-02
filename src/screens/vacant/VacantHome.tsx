import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  VacantScreenNavigationProp,
  VacantScreenParamList,
} from './VacantScreen'

import Axios from 'axios'
import Divider from '@/components/Divider'
import EodiroColors from '@/modules/themes/eodiro-colors'
import { Ionicons } from '@expo/vector-icons'
import getBuildingName from '@/modules/get-building-name'
import { useNavigation } from '@react-navigation/native'

type BuildingInfo = {
  buildingNumber: number
  total: number
  empty: number
}

async function fetchBuildings(): Promise<BuildingInfo[]> {
  const response = await Axios.get(
    'https://api2.eodiro.com/vacant/2020/1/서울/buildings?day=mon'
  )

  const buildings = response.data.map((building) => ({
    buildingNumber: building.building_number,
    total: building.total,
    empty: building.empty,
  }))

  return buildings
}

const VacantHome: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [buildings, setBuildings] = useState([])

  function updateBuildings() {
    setIsRefreshing(true)

    setTimeout(async () => {
      const buildings = await fetchBuildings()
      setBuildings(buildings)
      setIsRefreshing(false)
    }, 500)
  }

  useEffect(() => {
    async function firstLoad() {
      const buildings = await fetchBuildings()
      setBuildings(buildings)
      setIsLoading(false)
    }

    setIsLoading(true)
    firstLoad()
  }, [])

  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
      }}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={updateBuildings} />
      }
    >
      {isLoading && buildings.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <BuildingsList buildings={buildings} />
      )}
    </ScrollView>
  )
}

export default VacantHome

type BuildingsListProps = {
  buildings: BuildingInfo[]
}

const BuildingsList: React.FC<BuildingsListProps> = ({ buildings }) => {
  return (
    <>
      {buildings.map((buildingInfo) => (
        <View key={buildingInfo.buildingNumber}>
          <BuildingItem buildingInfo={buildingInfo} />
          <Divider />
        </View>
      ))}
    </>
  )
}

type BuildingItemProps = {
  buildingInfo: BuildingInfo
}

const BuildingItem: React.FC<BuildingItemProps> = ({ buildingInfo }) => {
  const { buildingNumber, total, empty } = buildingInfo
  const navigation = useNavigation<VacantScreenNavigationProp>()

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Classrooms', {
          buildingNumber,
        })
      }}
    >
      <View
        style={{
          marginLeft: 20,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              lineHeight: 40,
              fontWeight: '700',
              fontVariant: ['tabular-nums'],
            }}
          >
            {buildingNumber}
          </Text>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 15,
              marginTop: 3,
              color: EodiroColors.baseGray,
            }}
          >
            {getBuildingName(buildingNumber)}
          </Text>
        </View>

        <View
          style={{
            marginRight: 20,
          }}
        >
          <Text
            style={{
              overflow: 'hidden',
              fontSize: 20,
              lineHeight: 22,
              fontWeight: '700',
              color: EodiroColors.primary,
            }}
          >
            {empty}
          </Text>
        </View>

        <View
          style={{
            marginRight: 15,
          }}
        >
          <Ionicons
            name="ios-arrow-forward"
            size={20}
            color={EodiroColors.baseGray}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
