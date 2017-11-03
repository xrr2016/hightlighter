import _ from 'lodash'
import './style.css'
import avatar from './avatar.jpg'
import Data from './data.xml'

function component () {
  let element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'Webpack!'], ' ')
  element.classList.add('hello')

  console.log(Data)

  return element 
}

document.body.appendChild(component())