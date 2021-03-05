import React, { FC } from 'react'
import { ConfigProvider } from 'antd'

import zhCN from 'antd/lib/locale/zh_CN'

import { renderRoutes } from 'react-router-config'
import routes from './router'

const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    {renderRoutes(routes)}
  </ConfigProvider>
)

export default App
