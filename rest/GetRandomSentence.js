// start making calls

import { getPrivateApi } from './Config'

export function GetRandomSentence (token) {
  return getPrivateApi(token)
    .get('/ner/GetRandomSentence', {})
}
