import { create } from 'apisauce'

// define the api
export const api = create({
  baseURL: 'https://app.text-mining.ir/api',
  headers: { Accept: 'application/json' }
})

export function getPrivateApi (token) {
  return create({
    baseURL: 'https://app.text-mining.ir/api',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  })
}
