/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'
import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TextInput } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function HomeScreen({ navigation, route }: any) {
  React.useEffect(() => {
    console.log('route.params?.post', route.params?.post)
  }, [route.params?.post])

  React.useEffect(() => {
    const st = setTimeout(() => {
      navigation.navigate('Detail', {
        itemId: 86,
        message: '更新后的信息'
      })
    }, 5000)
    return () => clearTimeout(st)
  }, [navigation])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Text>PostMessage: {route.params?.post}</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('Detail', {
            itemId: 86,
            message: 'anything you wang here'
          })
        }}
      />
      <Button
        title="CreatePost"
        onPress={() => navigation.navigate('CreatePost')}
      />
    </View>
  )
}

function DetailScreen({ navigation, route }: any) {
  const { itemId, message } = route.params ?? {}

  React.useEffect(() => {
    setTimeout(() => {
      navigation.setParams({ itemId: 2222 })
    }, 1000)
  }, [navigation])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailScreen</Text>
      <Text>ItemId: {itemId}</Text>
      <Text>Message: {message}</Text>
      <Button
        title="Go To Detail again"
        onPress={() => {
          navigation.push('Detail', {
            itemId: Math.random() * 100
          })
        }}
      />
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go Back to first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

function CreatePostScreen({ navigation }: any) {
  const [text, setText] = React.useState<string>('')

  return (
    <>
      <TextInput
        multiline
        placeholder="请输入"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: { post: text },
            merge: true
          })
        }}
      />
    </>
  )
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           options={{ title: 'Overview' }}
//           component={HomeScreen}
//         />
//         <Stack.Screen name="Detail">
//           {props => <DetailScreen {...props} data={{ name: '张三' }} />}
//         </Stack.Screen>
//         <Stack.Screen name="CreatePost" component={CreatePostScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '待办'
          }}
        />
        <Tab.Screen
          name="Discover"
          component={HomeScreen}
          options={{
            title: '发现'
          }}
        />
        <Tab.Screen
          name="Judge"
          component={HomeScreen}
          options={{
            title: '评判'
          }}
        />
        <Tab.Screen
          name="Mine"
          component={HomeScreen}
          options={{
            title: '我的'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
