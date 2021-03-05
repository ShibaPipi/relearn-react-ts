import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Button } from 'antd'

class Home extends Component {
  render() {
    return (
      <Row justify="center">
        <Link to="/login">
          <Button type="primary">SignIn</Button>
        </Link>
        <Link to="/register">
          <Button type="primary">SignUp</Button>
        </Link>
      </Row>
    )
  }
}

export default Home
