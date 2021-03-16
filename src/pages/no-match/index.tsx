import React, { FC } from 'react'
import Helmet from 'react-helmet'

const NoMatch: FC = () => {
  return (
    <div>
      <Helmet title="404" />
      404
    </div>
  )
}

export default NoMatch
