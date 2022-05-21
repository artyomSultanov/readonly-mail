import { FC } from 'react'
import useToolBox from '../model'
import type { ToolBoxProp } from '../model'
import styles from './styles.module.scss'

const ToolBox: FC<ToolBoxProp> = ({ checkboxes, handleReset }) => {
  const { handleDispatch } = useToolBox()
  const checked = Object.keys(checkboxes).reduce(
    (acc, elem) =>
      checkboxes[elem] ? { ...acc, [elem]: checkboxes[elem] } : acc,
    {}
  )

  const handleClick = (param: string) => {
    handleDispatch(param, checked)
    handleReset()
  }

  return (
    <div className={styles.buttons}>
      <button className={styles.delete} onClick={() => handleClick('DELETE')}>
        Удалить
      </button>
      <button className={styles.read} onClick={() => handleClick('READ')}>
        Прочитать
      </button>
    </div>
  )
}

export default ToolBox
