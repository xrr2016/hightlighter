// @flow
import express from 'express'
import compression from 'compression'

import routing from './routing'
import { STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app)

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line
  console.log(
    // eslint-disable-next-line
    `Server running on port ${WEB_PORT} ${
      isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in another terminal'
    }.`
    // eslint-disable-next-line
  )
})
