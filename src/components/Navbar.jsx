import styles from '@/styles/navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftIcons}>
        <div className={styles.goldCircle}></div>
        <input type="text" className={styles.inputBox} placeholder="Search" />
        <button className={styles.addButton}>+</button>
      </div>
      <div className={styles.logo}>Ranolph</div>
      <div className={styles.rightIcons}>
        <div className={styles.arrowIcon}></div>
        <div className={styles.hamburgerMenu}></div>
      </div>
    </div>
  );
}
