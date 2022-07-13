import styles from "./navBar.module.css";
import Link from "next/link";

export default function NavBar({ title }) {
  return (
    <div className={styles.navBar}>
      <div className={styles.titleContainer}>
        {title}
        <div className={styles.Container}></div>
        <div className={styles.Item}>Home</div>
        <div className={styles.Item}>
          <Link href="/about">
            <a href="/">About</a>
          </Link>
          <div className={styles.Item}>Contact</div>
        </div>
      </div>
    </div>
  );
}
