import { View, Text, Button } from 'react-native'
import React from 'react'
import MyComponent from './MyComponent'

const App = () => {
  // การสร้างตัวแปร
  const fname = 'Samit'

  // สร้าง Method ไว้คลิกเรียก
  const pressMe = () => {
    alert('OK')
  }

  // สร้าง Object Style
  const textTitle = {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#228B22',
    backgroundColor: '#FF69B4',
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 32, color: 'blue' }}>Hello World!</Text>
      <Text style={textTitle}>สวัสดีชาวโลก</Text>
      <Text>{2 + 3}</Text>
      <Text style={textTitle}>Hello {fname}</Text>
      <Button title="Click Me" onPress={pressMe} />
      <MyComponent />
    </View>
  )
}

export default App
