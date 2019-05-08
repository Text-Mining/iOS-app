import React from 'react'
import { Alert, View } from 'react-native'
import { getLoginService } from '../database/services/LoginService'
import { GetRandomSentence } from '../rest/GetRandomSentence'
import { getRandomSentenceService } from '../database/services/RandomSentenceService'
import { TagSelect } from 'react-native-tag-select'

export class HomeScreen extends React.Component {
  state = {
    token: '',
    items: []
  }

  componentDidMount () {
    getLoginService().then((realm) => {
      if (realm.objects('LoginModel').length) {
        let Length = realm.objects('LoginModel').length
        let token = realm.objects('LoginModel')[Length - 1].token
        this.setState({
          token: token
        })
        this.init()
      }
    })
    this.getTags = this.getTags.bind(this)
    this.init = this.init.bind(this)
    this.draw = this.draw.bind(this)
    getRandomSentenceService().then((realm) => {
      this.draw(realm)
    })
  }

  init () {
    GetRandomSentence(this.state.token).then((data) => {
      data = data.data
      getRandomSentenceService().then((realm) => {
        realm.write(() => {
          try {
            let items = []
            data.words.forEach(function (item) {
              item.WordOrder = item.WordOrder + ''
              items.push(realm.create('RandomSentenceWordsModel', item))
            })
            let randomSentenceModel = realm.create('RandomSentenceModel', {
              sentenceId: data.sentenceId,
              words: items
            })
            this.draw(realm)
          } catch (e) {
            console.log(e)
          }
          // console.log(randomSentenceModel)
        })
      }).catch((error) => {
        console.log(error)
      })
    })
  }

  draw (realm) {
    console.log('now drawing...')
    if (realm.objects('RandomSentenceModel').length) {
      let Length = realm.objects('RandomSentenceModel').length
      let randomSentence = realm.objects('RandomSentenceModel')[Length - 1]
      console.log(randomSentence.words)
      this.setState({
        items: randomSentence.words
      })
    }
  }

  getTags () {
    return this.state.items.map(x => {
      return {
        id: x.WordId,
        label: x.Word
      }
    })
  }

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TagSelect
          data={this.getTags()}
          max={1}
          ref={(tag) => {
            this.tag = tag
          }}
          onMaxError={() => {
          }}
        />
      </View>
    )
  }
}
