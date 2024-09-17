import React from 'react'
import Link from 'next/link'
import styles from '../styles/dashNav.module.css'

const DashNav = () => {
  return (
    <div className={styles.navContainer}>
      <nav>
        <div className="text-white text-xl">WC-Care Dashboard</div> {/* Branding */}
        <div className={`flex gap-10 ${styles.navLinks}`}>
          <Link href="/dashboard/user" className={`text-white ${styles.navLink}`}>User Page</Link>
          <Link href="/dashboard/user/admin" className={`text-white ${styles.navLink}`}>Admin Page</Link>
        </div>
      </nav>
    </div>
)}

export default DashNav