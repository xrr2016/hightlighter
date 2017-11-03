import _ from 'lodash'
import './style.css'
import avatar from './avatar.jpg'

function component () {
  let element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'Webpack!'], ' ')
  element.classList.add('hello')

  const img = new Image()
  img.src = avatar

  element.appendChild(img)

  return element 
}

document.body.appendChild(component())