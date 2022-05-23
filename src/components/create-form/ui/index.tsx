import useForm from '../model'

import styles from './styles.module.css'

const Form = () => {
  const { value, handleSubmit, handleChange } = useForm()

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Создать папку'
        autoComplete='off'
        maxLength={14}
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default Form
