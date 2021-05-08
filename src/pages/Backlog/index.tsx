import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '@/styles'

const Backlog = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Backlog</Text>
      <Button
        title="GO to Discover"
        onPress={() => navigation.navigate('Discover')}
      />
    </View>
  )
}

export default Backlog
