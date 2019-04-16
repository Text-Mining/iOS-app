import { all, takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import { StartupTypes } from '../Redux/StartupRedux'
import { startup } from './StartupSagas'
import { LoginTypes } from '../Redux/TextMining/Login'
import { login } from './TextMining/AuthSagas'
import { TagsTypes } from '../Redux/TextMining/TagsRedux'
import { getTags } from './TextMining/TagsSagas'

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(TagsTypes.TAGS_REQUEST, getTags, api),

    // some sagas receive extra parameters in addition to an action
    takeLatest(LoginTypes.USER_REQUEST, login, api)
  ])
}
