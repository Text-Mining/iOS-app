import Realm from 'realm'
import { RandomSentenceModel, RandomSentenceWordsModel } from '../models/RandomSentenceModel'

export function getRandomSentenceService () {
  return Realm.open({
    schema: [RandomSentenceWordsModel, RandomSentenceModel],
    path: 'randomSentence'
  })
}
