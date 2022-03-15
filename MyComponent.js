import { View, Text } from 'react-native'
import React from 'react'

const MyComponent = () => {
  return (
    <View>
      <Text style={{color: 'red', fontSize: 24, marginTop: 20, marginBottom: 20,}}>My Favorite Food</Text>
      <Text>1.Noodle</Text>
      <Text>2.Pizza</Text>
      <Text>3.Spakettie</Text>
    </View>
  )
}

export default MyComponent