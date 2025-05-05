import Link from "next/link";
import React from "react";
import styles from './Navbar.module.css';


const Navbar = () => {
  return (
    <div className={`${styles.navbar} sm:h-16 lg:h-24 rounded-xl m-2`}>
      <div className={`${styles.logo}`}>
      <img src="/logo.png" alt="logo" className={styles.logo_img}/>
      <span>Pixel Planner</span>
      </div>
      <div className={styles.linksdiv}>
        <Link href="../home" className={styles.links}>Home</Link>
        <Link href="../create" className={styles.links}>Create ✨</Link>
        <Link href="../dashboard" className={styles.links}>PlannerHub</Link>
        {/* temp for login button */}
        <h3 className={styles.auth}>Login</h3>
      </div>
    </div>
  );
};

export default Navbar;
