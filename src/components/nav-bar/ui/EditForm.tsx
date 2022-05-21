import { FC } from 'react'
import { FaEdit } from 'react-icons/fa'
import useEditForm from '../model'

import styles from './styles.module.scss'

const EditForm: FC<{ id: string; title: string }> = ({ id, title }) => {
  const { value, handleSubmit, handleChange, handleEdit, isEdit } =
    useEditForm()
  return (
    <>
      {isEdit ? (
        <form onSubmit={(e) => handleSubmit(e, id)} className={styles.form}>
          <input
            type='text'
            value={value || title}
            placeholder='Введите название'
            autoComplete='off'
            maxLength={14}
            onChange={handleChange}
            className={styles.input}
          />
        </form>
      ) : null}
      <FaEdit onClick={handleEdit} />
    </>
  )
}

export default EditForm
