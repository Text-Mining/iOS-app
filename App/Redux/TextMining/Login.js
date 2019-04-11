import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ['username', 'password'],
  userSuccess: ['token'],
  userFailure: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: 'false',
  error: '',
  token: '',
  username: '',
  password: ''
})

/* ------------- Selectors ------------- */

export const Token = {
  selectAvatar: state => state.login.token
}

/* ------------- Reducers ------------- */

// request login
export const request = (state, { email, password }) => {
  console.log('requesting ...')
  state.merge({ fetching: true, token: '' })
}

// successful login
export const success = (state, action) => {
  const { token } = action
  console.log(token)
  return state.merge({ fetching: false, error: '', token })
}

// failed to login
export const failure = (state) =>
  state.merge({ fetching: false, error: true, token: '' })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.USER_REQUEST]: this.request,
  [LoginTypes.USER_SUCCESS]: this.success,
  [LoginTypes.USER_FAILURE]: this.failure
})