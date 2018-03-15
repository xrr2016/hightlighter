// @flow

import React from 'react'
import HelloButton from './container/HelloButton'
import HelloAsyncButton from './container/HelloAsyncButton'
import Message from './container/Message'
import MessageAsync from './container/MessageAsync'
import { APP_NAME } from '../shared/config'

const App = () => (
  <main>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
    <MessageAsync />
    <HelloAsyncButton />
  </main>
)

export default App
