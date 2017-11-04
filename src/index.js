import './style.css'
import _ from 'lodash'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function component() {
  var element = document.createElement('div')
  var button = document.createElement('button')
  var br = document.createElement('br')

  button.innerHTML = 'Click me and look at the console!'
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.appendChild(br)
  element.appendChild(button)

  button.onclick = e =>
    import('./print').then(module => {
      var print = module.default
      print()
    })

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
