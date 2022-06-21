import styles from './routes.module.scss'

import Tab from 'components/Tab'
import Toggle from 'components/Toggle'
import Slider from 'components/Slider'

const App = () => {
  return (
    <div className={styles.app}>
      <Tab />
      <Toggle />
      <Slider />
    </div>
  )
}

export default App
