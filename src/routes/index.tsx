import styles from './routes.module.scss'

import Tab from 'components/Tab'
import Toggle from 'components/Toggle'
import Slider from 'components/Slider'
import Input from 'components/Input'
import Dropdown from 'components/Dropdown'

const App = () => {
  return (
    <div className={styles.app}>
      <Tab />
      <Toggle />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
