import { useEffect, useState } from 'react';
import { useCollection } from '../../hooks/useCollection';
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
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);

  const [formState, setFormState] = useState(initialState);
  const [category, setCategory] = useState({});
  const [assignedUsers, setAssignedUsers] = useState([]);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => ({
        value: user,
        label: user.displayName,
      }));
      setUsers(options);
    }
  }, [documents]);

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
      assignedUsers,
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
        <label>
          <span>Project category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
        <button className='btn'>Add Project</button>
      </form>
    </div>
  );
}
