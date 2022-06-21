import { useState, MouseEvent } from 'react'
import cx from 'classnames'
import styles from './tab.module.scss'

const TAPNAME = ['🌸🌸🌸🌸🌸', '🌷🌷🌷🌷🌷', '🌼🌼🌼🌼🌼']

const Tab = () => {
  const [nowTabIndex, setNomwTapIndex] = useState(0)
  const LISTITEM = `list${nowTabIndex}`

  const handleTap = (e: MouseEvent<HTMLButtonElement>) => {
    setNomwTapIndex(Number(e.currentTarget.value))
  }
  return (
    <div className={styles.tabWrap}>
      <ul className={styles.listWrap}>
        {TAPNAME.map((item, idx) => {
          const key = `list-${idx}`
          return (
            <li key={key} className={styles.listItem}>
              <button type='button' onClick={handleTap} value={idx}>
                {item}
              </button>
            </li>
          )
        })}
      </ul>
      <div className={cx(styles.barWrap, styles[LISTITEM])} />

      <div className={styles.textWrap}>{TAPNAME[nowTabIndex]}</div>
    </div>
  )
}

export default Tab
