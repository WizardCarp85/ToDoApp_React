import Link from "next/link";
import React from "react";
import styles from './Navbar.module.css';


const Navbar = () => {
  return (
    <div className={`${styles.navbar} sm:h-16 lg:h-20 rounded-xl m-1 p-2`}>
      <div className={`${styles.logo}`}>
        Pixel Planner
      </div>
      <div className="flex gap-6">
        <Link href="../home" className={styles.links}>Home</Link>
        <Link href="../create" className={styles.links}>Create</Link>
        <Link href="../dashboard" className={styles.links}>PlannerHub</Link>
        {/* temp for login button */}
        <h3>Login</h3>
      </div>
    </div>
  );
};

export default Navbar;
