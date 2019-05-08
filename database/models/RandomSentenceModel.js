export const RandomSentenceWordsModel = {
  name: 'RandomSentenceWordsModel',
  properties: {
    // The following property types are equivalent
    WordId: { type: 'string' },
    NerTagId: { type: 'string' },
    Word: { type: 'string' },
    WordOrder: { type: 'string' },
    Tag: { type: 'string' }
  }
}

export const RandomSentenceModel = {
  name: 'RandomSentenceModel',
  properties: {
    // The following property types are equivalent
    sentenceId: { type: 'string' },
    words: { type: 'list', objectType: 'RandomSentenceWordsModel' }
  }
}
