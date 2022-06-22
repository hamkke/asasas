import { ChangeEvent } from 'react'
import styles from './input.module.scss'
import cx from 'classnames'
import { CheckIcon, YesIcon, NoIcon } from 'assets/svgs'

interface Props {
  label: string
  type: string
  placeholder: string
  value: string
  invalid?: boolean | null
  showPassword?: boolean | null
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  icon?: boolean
}

const InputBox = ({ label, onChange, value, type, placeholder, showPassword, invalid, icon, onClick }: Props) => {
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e)
  }
  const handleShowPassword = () => {
    if (onClick) onClick()
  }
  const toPlaceIcon = () => {
    if (type === 'password') {
      return showPassword ? <YesIcon onClick={handleShowPassword} /> : <NoIcon onClick={handleShowPassword} />
    }
    return <CheckIcon className={cx({ [styles.correctEmail]: invalid })} />
  }
  return (
    <>
      <label>{label}</label>
      <div className={styles.inputFlexbox}>
        <input
          type={showPassword !== null && showPassword ? 'text' : type}
          onChange={handleEmail}
          className={styles.input}
          value={value}
          placeholder={placeholder}
        />
        {icon ? toPlaceIcon() : ''}
      </div>
    </>
  )
}

export default InputBox
