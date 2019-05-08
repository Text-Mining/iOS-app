import Realm from 'realm'
import LoginModel from '../models/LoginModel'

export function getLoginService () {
  return Realm.open({
    schema: [LoginModel],
    path: 'loginSentence'
  })
}
