import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Backlog from '@/pages/Backlog'
import Discover from '@/pages/Discover'
import Mine from '@/pages/Mine'
import Judge from '@/pages/Judge'

const Tab = createBottomTabNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Backlog"
          component={Backlog}
          options={{
            title: '待办'
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            title: '发现'
          }}
        />
        <Tab.Screen
          name="Judge"
          component={Judge}
          options={{
            title: '评判'
          }}
        />
        <Tab.Screen
          name="Mine"
          component={Mine}
          options={{
            title: '我的'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router
