import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import { useAuthContext } from '../hooks/useAuthContext';
//styles and images
import styles from './Sidebar.module.css';
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className={styles.sidebar}>
      <div className={styles['sidebar-content']}>
        <div className={styles.user}>
          <Avatar src={user.photoURL} />
          <p>
            Hey
            {user.displayName}
          </p>
        </div>
        <nav className={styles.links}>
          <ul>
            <li>
              <NavLink className={styles.active} exact to='/'>
                <img src={DashboardIcon} alt='dashboard icon'></img>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.active} to='/create'>
                <img src={AddIcon} alt='add project icon'></img>
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
