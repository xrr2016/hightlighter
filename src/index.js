import './style.css'
import { cube } from './math'
import _ from 'lodash'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function component() {
  let element = document.createElement('pre')

  element.innerHTML = [
    'Hello Wobpack!',
    '5 cubed is equal to',
    `${cube(5)}`
  ].join('\n\n')

  return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./math.js', function() {
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
