export interface Config {
  database?: {
    url: string
    name: string
  }

  development?: {
    backendPort: number
    frontendPort: number
  }

  meta?: {
    title: string
    description: string
    thumbnail: string
    themeColor: string
    url: string
  }

  discord?: {
    scope: string[]
    redirectUri: string
    botToken: string
    clientId: string
    clientSecret: string
  }

  firebase?: {
    apiKey: string
    authDomain: string
    databaseURL?: string
    projectId: string
    storageBucket?: string
    messagingSenderId?: string
  }

  port?: number

  isDevelopment?: boolean
}
