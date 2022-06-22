import styles from './routes.module.scss'

import Tab from 'components/Tab'
import Toggle from 'components/Toggle'
import Slider from 'components/Slider'
import Input from 'components/Input'

const App = () => {
  return (
    <div className={styles.app}>
      <Tab />
      <Toggle />
      <Slider />
      <Input />
    </div>
  )
}

export default App
