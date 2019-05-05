import { api } from './Config'

// start making calls
export function loginCall (email, password) {
  return api
    .post('/auth/login', {
      Email: email,
      Password: password
    })
}
