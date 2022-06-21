import styles from './toggle.module.scss'

const Toggle = () => {
  return (
    <div className={styles.toggleWrap}>
      <input type='radio' name='pick' placeholder='sdsd' id='first' className={styles.first} defaultChecked />
      <label htmlFor='first'>기본</label>
      <input type='radio' name='pick' id='second' className={styles.second} />
      <label htmlFor='second'>상세</label>
      <span className={styles.switch} />
    </div>
  )
}

export default Toggle
