import { Config } from './Config'
import { Discord } from './discord'
import { firestore } from 'firebase'

export interface Props {
  config: Config
  success: Function
  failure: Function
  db?: firestore.Firestore

  jwt: {
    sign: Function
    verify: Function
  }

  discord: Discord
}
