import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import styles from '../styles/main.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainWrapper}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
