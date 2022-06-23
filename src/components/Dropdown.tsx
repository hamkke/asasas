import { ChangeEvent, MouseEvent, useState } from 'react'
import styles from './dropdown.module.scss'
import cx from 'classnames'
import { SearchIcon, ArrowDIcon } from 'assets/svgs'

const LISTITEM = ['안녕하세요', '✨', '반가워여!', '✨✨', '안녕안녕하세요', '반가워요', 'A', 'AA', 'ABC', 'AbCd']

const Dropdown = () => {
  const [searchTxt, setsearchTxt] = useState('')
  const [title, setTitle] = useState('이제 곧 여름이다')
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleOpenDropdown = () => {
    setOpenDropdown((prev) => !prev)
  }

  const handelsearchTxt = (e: ChangeEvent<HTMLInputElement>) => {
    setsearchTxt(e.currentTarget.value)
  }

  const hadleTitle = (e: MouseEvent<HTMLButtonElement>) => {
    setOpenDropdown(false)
    setTitle(e.currentTarget.value)
  }
  return (
    <div className={styles.dropdownWrap}>
      <div className={styles.titleWrap}>
        <h1>{title}</h1>
        <button type='button' onClick={handleOpenDropdown}>
          <ArrowDIcon />
        </button>
      </div>

      <div className={cx(styles.listWrap, { [styles.closeDropdown]: !openDropdown })}>
        <div className={styles.inputWrap}>
          <SearchIcon />
          <input type='text' placeholder='검색어 입력' className={styles.searchInput} onChange={handelsearchTxt} />
        </div>
        <ul>
          {LISTITEM.filter((beforeListItem) => {
            if (!searchTxt) return beforeListItem
            if (beforeListItem.toLowerCase().includes(searchTxt.toLowerCase())) return beforeListItem
            return ''
          }).map((afterListItem) => {
            return (
              <li key={afterListItem}>
                <button type='button' onClick={hadleTitle} value={afterListItem}>
                  {afterListItem}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
