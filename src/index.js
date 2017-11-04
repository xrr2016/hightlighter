import _ from 'lodash'
import paintMe from './paint'
import './style.css'

function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'Webpack!'], ' ')
  btn.innerHTML = 'Click Me'
  btn.addEventListener('click', paintMe)

  element.appendChild(btn)

  return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./paint.js', function() {
    console.log('Accepting the updated printMe module!')
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
