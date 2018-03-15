import { helloEndpointRoute } from './routes'

test('helloEnpointRoute', () => {
  expect(helloEndpointRoute()).toBe('/api/hello/:num')
  expect(helloEndpointRoute(1234)).toBe('/api/hello/1234')
})
