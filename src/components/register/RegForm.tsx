import React, { FC, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Card, Checkbox, Col, Form, Input, Modal, Row } from 'antd'
import { getMobileCaptcha, login } from '../../api'
import { captchaRegExp, mobileRegExp, passwordRegExp } from '../../common/contants/regExp'
import { locales } from '../../locales/zh-CN'

const formItemLayout = {
  wrapperCol: {
    xs: { span: 22 },
    sm: { span: 22 },
  }
}

const rules = {
  mobile: [
    {
      required: true,
      message: locales.mobileRequired,
    }, {
      pattern: mobileRegExp,
      message: locales.mobilePatternError
    }
  ],
  captcha: [
    {
      required: true,
      message: locales.captchaRequired,
    }, {
      pattern: captchaRegExp,
      message: locales.captchaPatternError
    }
  ],
  password: [
    {
      required: true,
      message: locales.passwordRequired
    }, {
      pattern: passwordRegExp,
      message: locales.passwordPatternError
    }
  ],
  agreement: [{
    validator: async (_: object, value: undefined | boolean): Promise<any> => {
      if (!value) {
        throw new Error(locales.agreementCheck)
      }
    }
  }]
}

const RegForm: FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [captchaBtnDisabled, setCaptchaBtnDisabled] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)

  const history = useHistory()
  const [form] = Form.useForm()

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (0 !== count) {
      timer = setInterval(() => {
        setCount(prevCount => {
          if (1 === prevCount) {
            setCaptchaBtnDisabled(false)
            clearInterval(timer)
          }

          return prevCount - 1
        })
        console.log(count)
      }, 1000)
    }

    return () => {
      clearInterval(timer)
    }
  })

  const getCaptcha = async (): Promise<void> => {
    const { args: { captcha } } = await getMobileCaptcha()
    localStorage.setItem('captcha', captcha)
    setCaptchaBtnDisabled(true)

    setCount(60)
  }

  const loginSubmit: () => void = async () => {
    const { mobile } = await form.validateFields()
    const { data: { code } } = await login(mobile)

    if (200 === code) {
      history.push({
        pathname: '/'
      })
    }
  }

  return (
    <Card
      headStyle={{ background: 'aliceblue' }}
      title={locales.userReg}
      style={{ width: 340 }}
    >
      <Form
        form={form}
        size="small"
        colon={false}
        labelCol={{ span: 7 }}
        labelAlign="left"
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        validateTrigger="onBlur"
        requiredMark={false}
      >
        <Form.Item
          label={locales.mobile}
          name="mobile"
          rules={rules.mobile}
        >
          <Input />
        </Form.Item>
        <Form.Item label={locales.captcha}>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={rules.captcha}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button
                type="primary"
                disabled={captchaBtnDisabled}
                onClick={getCaptcha}
              >
                {captchaBtnDisabled ? `${count} S` : locales.getCaptcha}
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          label={locales.loginPassword}
          name="password"
          rules={rules.password}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="agreement"
          valuePropName="checked"
          rules={rules.agreement}
        >
          <Checkbox>
            {locales.accepted}&nbsp;&nbsp;
            <Link
              to="#"
              onClick={() => setModalVisible(true)}
            >
              {locales.agreement}
            </Link>
          </Checkbox>
        </Form.Item>
        <Form.Item {...formItemLayout}>
          <Button
            type="primary"
            block
            onClick={loginSubmit}
          >
            {locales.regNow}
          </Button>
        </Form.Item>
        <Modal
          title={locales.agreement}
          centered
          visible={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </Form>
      <div>{locales.hasAccount}<Link to="#">{locales.loginNow}</Link></div>
    </Card>
  )
}

export default RegForm
