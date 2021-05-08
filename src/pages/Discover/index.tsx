import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '@/styles'

const Discover = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Discover</Text>
      <Button
        title="Go to Backlog"
        onPress={() => navigation.navigate('Backlog')}
      />
    </View>
  )
}

export default Discover
