import { Middleware } from 'koa'
import Router from 'koa-router'

import { Props } from '@interfaces'

export default ({ db }: Props): Middleware => {
  const router = new Router()

  const Posts = db.collection('posts')

  router.get('/new', async ctx => {
    // await Posts.add({
    //   test: 'absdfasdfa',
    // })

    ctx.body = 'success'
  })

  return router.routes()
}
