import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { ConfigProvider } from 'antd'

import zhCN from 'antd/lib/locale/zh_CN'

import { renderRoutes } from 'react-router-config'
import routes from './router'

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <Helmet title="APP" />
    {renderRoutes(routes)}
  </ConfigProvider>
)

export default App
