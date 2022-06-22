import { ChangeEvent, useState } from 'react'
import InputBox from './InputBox'
import cx from 'classnames'
import styles from './input.module.scss'

const Input = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [warningTxt, setWarningTxt] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value
    setWarningTxt(true)
    const regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(target)

    if (target === '' || regEmail) setWarningTxt(false)

    setInvalid(regEmail)
    setEmail(target)
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className={styles.inputWrap}>
      <div className={styles.userForm}>
        <InputBox
          type='text'
          label='EMAIL'
          onChange={handleEmail}
          value={email}
          placeholder='이메일 입력'
          invalid={invalid}
          icon
        />
        <p className={cx(styles.paragraph, { [styles.showParagraph]: warningTxt })}>다시 입력하세욥</p>
      </div>
      <div className={styles.userForm}>
        <InputBox
          type='password'
          label='PASSWORD'
          onChange={handlePassword}
          value={password}
          placeholder='비밀번호 입력'
          showPassword={showPassword}
          icon
          onClick={handleShowPassword}
        />
      </div>
    </div>
  )
}

export default Input
