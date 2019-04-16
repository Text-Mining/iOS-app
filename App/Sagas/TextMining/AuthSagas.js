import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import LoginActions from '../../Redux/TextMining/Login'

export function * refreshToken (api, action) {
  console.log('called')
  const { username } = action
  // make the call to the api
  const response = yield call(api.refreshToken, username)

  console.log(response)
  if (response.ok) {
    const firstUser = path(['data', 'items'], response)[0]
    const avatar = firstUser.avatar_url
    // do data conversion here if needed
    yield put(LoginActions.userSuccess(avatar))
  } else {
    yield put(LoginActions.userFailure())
  }
}

export function * login (api, action) {
  console.log('called')
  const { email, password } = action
  // make the call to the api
  const response = yield call(api.login, email, password)

  console.log(response)
  if (response.ok) {
    const data = path(['data'], response)
    const token = data.token
    // do data conversion here if needed
    // dispatch({ type: 'USER_SUCCESS', token })
    yield put({ type: 'USER_SUCCESS', token })
    yield put(LoginActions.userSuccess(token))
  } else {
    yield put(LoginActions.userFailure())
  }
}
