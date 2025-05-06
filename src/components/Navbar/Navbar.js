import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`${styles.navbar} sm:h-16 lg:h-24 rounded-xl m-2`}>
      <div className={`${styles.logo}`}>
        <Link href="../home">
          <img src="/logo.png" alt="logo" className={styles.logo_img} />
          </Link>
          <Link href="/">
          <span>Pixel Planner</span>
        </Link>
      </div>
      <div className={styles.linksdiv}>
        <Link href="../home" className={styles.links}>
          Home
        </Link>
        <Link href="../create" className={styles.links}>
          Create ✨
        </Link>
        <Link href="../dashboard" className={styles.links}>
          PlannerHub
        </Link>
        
        {/* temp for login button */}
        <Link href="../auth/login" className={styles.auth} >Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
