import chalk from 'chalk'

import * as firebase from 'firebase/app'
import 'firebase/firestore'

// import {
//   MongoClient, 
//   Collection, 
// } from 'mongodb'


import router from './router'
import jwt from './utils/jwt'
import config from '../config'
import discord from './utils/discord'

import {
  Props, 
} from '@interfaces'

const success = (...args: Array<string>): void => {
  console.log(`${ chalk.bgGreen.black(' API ') }`, ...args, '\n')
}

const failure = (...args: Array<string>): void => {
  console.log(`${ chalk.bgRed.black(' API ') }`, ...args, '\n')
}

const init = async (): Promise<void> => {
  // const dbClient = await MongoClient.connect(config.database.url, { useUnifiedTopology: true })
  // const dbStorage = dbClient.db(config.database.name)

  // const db = (name: string): Collection => dbStorage.collection(name)

  const db = firebase.initializeApp(config.firebase).firestore()

  const props: Props = {
    config,
    success,
    failure,
    db,
    jwt,
    discord: discord(config.discord),
  }

  router(props)
}

init().catch(failure)
