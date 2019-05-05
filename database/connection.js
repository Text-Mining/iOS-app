export var Datastore = require('react-native-local-mongodb')
export var db_authentication = new Datastore({ filename: 'authentication', autoload: true })
