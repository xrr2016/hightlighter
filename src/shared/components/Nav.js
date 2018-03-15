// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { HOME_PAGE_ROUTE, HELLO_PAGE_ROUTE, HELLO_ASYNC_PAGE_ROUTE, NOT_FOUND_DEMO_PAGE_ROUTE } from '../routes'

const routes = [
  { route: HOME_PAGE_ROUTE, label: 'Home' },
  { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
  { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
  { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' }
]

export default () => (
  <nav>
    <ul>
      {routes.map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'limegreen' }}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)
