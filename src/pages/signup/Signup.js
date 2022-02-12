import { useState } from 'react';
//styles
import styles from './signup.module.css';

export default function Signup() {
  const initialState = {
    email: '',
    password: '',
    displayName: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFormChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileChange = (event) => {
    setThumbnail(null);

    let selected = event.target.files[0];

    if (!selected) {
      return setThumbnailError('Please select a file');
    }

    if (!selected.type.includes('image')) {
      return setThumbnailError('Selected file must be an image');
    }

    if (selected.size > 100000) {
      return setThumbnailError('Image file size must be less that 100kb');
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log('thumbnail updated');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData, thumbnail);
  };

  return (
    <form className={styles['auth-form']} onSubmit={handleFormSubmit}>
      <h2>Sign up</h2>
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
      <label htmlFor='displayName'>display name:</label>
      <input
        type='text'
        name='displayName'
        id='displayName'
        required
        onChange={handleFormChange}
        value={formData.displayName}
      />
      <label htmlFor='thumbnail'>
        profile thumbnail:
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      <input
        type='file'
        name='thumbnail'
        id='thumbnail'
        //TODO: handle file upload
        onChange={handleFileChange}
        required
      />
      <button className='btn'>Sign up</button>
    </form>
  );
}
