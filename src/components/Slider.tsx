import { useState, MouseEvent, ChangeEvent } from 'react'
import styles from './slider.module.scss'
import cx from 'classnames'

const RANGE = [1, 25, 50, 75, 100]

const Slider = () => {
  const [ratio, setRatio] = useState(1)

  const handleRange = (e: ChangeEvent<HTMLInputElement>) => {
    setRatio(e.currentTarget.valueAsNumber)
  }

  const handleBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setRatio(Number(e.currentTarget.value))
  }

  const handleBG = (idx: number) => {
    return ratio >= 22 * idx ? 'black' : ''
  }

  return (
    <div className={styles.sliderWrap}>
      <h1>{ratio} %</h1>
      <div className={styles.barWrap}>
        <div
          className={styles.bar}
          style={{
            width: '100%',
            backgroundImage: `linear-gradient(to right,rgb(0 0 0) ${ratio + 0.5}%, rgb(56 212 136) ${ratio}%)`,
          }}
        />
        {RANGE.map((item, idx) => {
          const pointBtn = `pointbtn${item}`
          return (
            <div
              className={cx(styles.pointDot, styles[pointBtn])}
              key={item}
              style={{ backgroundColor: handleBG(idx) }}
            />
          )
        })}
        <input type='range' min='0' max='100' value={ratio} onChange={handleRange} />
      </div>
      <div className={styles.numBtnWrap}>
        {RANGE.map((item, idx) => {
          const key = `button${idx}`
          return (
            <button key={key} type='button' className={styles.numBtn} onClick={handleBtn} value={item}>
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
