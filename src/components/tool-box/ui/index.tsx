import { FC } from 'react'
import useToolBox from '../model'
import type { ToolBoxProp } from '../model'
import styles from './styles.module.css'

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
      <span className={styles.delete} onClick={() => handleClick('DELETE')}>
        Удалить
      </span>
      <span className={styles.read} onClick={() => handleClick('READ')}>
        Прочитать
      </span>
    </div>
  )
}

export default ToolBox
