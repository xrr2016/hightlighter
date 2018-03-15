// @flow

export const homePage = () => null

export const helloPage = () => ({ hello: { message: 'Server-side preloaded message' } })

export const helloAsyncPage = () => ({ hello: { messageAsync: 'Server-side preloaded message for async page' } })

export const helloEndPoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`
})
