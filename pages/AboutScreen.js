import React from 'react'
import { Button, Linking, Text, View } from 'react-native'

export class AboutScreen extends React.Component {

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Text-Mining.ir </Text>
        <Text>https://github.com/Text-Mining/Persian-NER/</Text>
        <Button title={'Open Link'} onPress={() =>
          Linking.openURL('https://github.com/Text-Mining/Persian-NER')
        }/>
      </View>
    )
  }
}
