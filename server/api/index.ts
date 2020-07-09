import { Middleware } from 'koa'
import Router from 'koa-router'

import { Props } from '@interfaces'

import DiscordRouter from './discord'
import PostsRouter from './posts'

export default (props: Props): Middleware => {
  const router = new Router()

  router.use('/discord', DiscordRouter(props))
  router.use('/posts', PostsRouter(props))

  return router.routes()
}
