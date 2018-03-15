// @flow

import { connect } from 'react-redux'

import MessageAsync from '../components/Message'

const mapStateToProps = state => ({
  message: state.hello.get('messageAsync')
})

export default connect(mapStateToProps)(MessageAsync)
