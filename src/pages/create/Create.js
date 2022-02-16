import { useState } from 'react';
import Select from 'react-select';
// styles
import styles from './Create.module.css';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

export default function Create() {
  const initialState = {
    name: '',
    details: '',
    dueDate: '',
    category: '',
  };

  const [formState, setFormState] = useState(initialState);
  const [category, setCategory] = useState({});
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleFormChange = ({ target }) => {
    const { value, name } = target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const mergedFormState = {
      ...formState,
      category: category.value,
    };
    console.log(mergedFormState);
  };

  return (
    <div className={styles['create-form']}>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Project name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={formState.name}
          onChange={handleFormChange}
          required
        />
        <label htmlFor='details'>Project details:</label>
        <textarea
          type='text'
          name='details'
          id='details'
          onChange={handleFormChange}
          value={formState.details}
          required
        />
        <label htmlFor='dueDate'>Set due date:</label>
        <input
          type='date'
          id='dueDate'
          name='dueDate'
          value={formState.dueDate}
          onChange={handleFormChange}
          required
        />
        <label htmlFor='category'>Project category:</label>
        <Select
          options={categories}
          onChange={(option) => setCategory(option)}
        />
        <label htmlFor='AssignTo'>Assign to:</label>
        {/* TODO: */}
        <button className='btn'>Add Project</button>
      </form>
    </div>
  );
}
