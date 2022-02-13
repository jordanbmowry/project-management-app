import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
// styles
import styles from './Login.module.css';

export default function Login() {
  const initialFormData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const { login, isPending, error } = useLogin();

  const handleFormChange = ({ target }) => {
    const { value, name } = target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    login(email, password);
  };

  return (
    <div>
      <form className={styles['auth-form']} onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <label htmlFor='email'>email:</label>
        <input
          type='email'
          name='email'
          id='email'
          required
          onChange={handleFormChange}
          value={formData.email}
        />
        <label htmlFor='password'>password:</label>
        <input
          type='password'
          name='password'
          id='password'
          required
          onChange={handleFormChange}
          value={formData.password}
        />

        {!isPending ? (
          <button className='btn' type='submit'>
            Login
          </button>
        ) : (
          <button className='btn' disabled>
            Loading...
          </button>
        )}
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
}
