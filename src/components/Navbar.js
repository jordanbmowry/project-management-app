import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
//styles and images
import styles from './Navbar.module.css';
import Checklist from '../assets/checklist_icon.svg';

export default function Navbar() {
  const { logout, isPending } = useLogout();
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <img src={Checklist} alt='checklist logo' />
          <span>Project Management App</span>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          {!isPending ? (
            <button className='btn' onClick={logout}>
              Logout
            </button>
          ) : (
            <button disabled className='btn'>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
