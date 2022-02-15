import styles from './OnlineUsers.module.css';
import { useCollection } from '../hooks/useCollection';
import Avatar from './Avatar';

export default function OnlineUsers() {
  const { error, documents } = useCollection('users');
  return (
    <div className={styles['user-list']}>
      <h2>All Users</h2>
      {error && <div className='error'>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className={styles['user-list-item']}>
            {user.online && <span className={styles['online-user']}></span>}
            <span className={styles['user-name']}>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
