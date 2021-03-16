import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Button, Input } from 'antd'
import { JSEncrypt } from 'jsencrypt'

import AddCount from '../../components/home/AddCount'
import Sub from '../../components/home/Sub'
import rsaPublicKey from '../../common/contants/rsaPublicKey'
import Helmet from 'react-helmet'

const Home: FC = () => {
  const [encryptedString, setEncryptedString] = useState<string>('')

  useEffect(() => {
    // document.title = '123'
  })

  const encrypt = () => {
    const encryptor = new JSEncrypt({})
    encryptor.setPublicKey(rsaPublicKey)

    const str = encryptor.encrypt('abc')
    if ('string' === typeof str) {
      setEncryptedString(str)
    }
  }

  return (
    <Row justify="center">
      <Helmet title="Home" />
      <Link to="/about">
        <Button type="primary">About</Button>
      </Link>
      <Link to="/asasas">
        <Button type="primary">no-match</Button>
      </Link>
      <Link to="/register">
        <Button type="primary">Reg</Button>
      </Link>
      <div>
        <Input value={'abc'} />
        <Button type="primary" onClick={() => encrypt()}>encrypt it</Button>
        <Input value={encryptedString} />
      </div>
      <AddCount />
      <Sub />
    </Row>
  )
}

export default Home
