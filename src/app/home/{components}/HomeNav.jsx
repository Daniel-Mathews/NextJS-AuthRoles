//Navigation bar for the home page
//Server Rendered
import React from 'react'
import Link from 'next/link'; 
import styles from '../styles/homeNav.module.css'
import { getServerSession } from "next-auth";
import { options } from '../../api/auth/[...nextauth]/options'

const homeNav = async () => {
  const session = await getServerSession(options);
  console.log(session?.user?.role);
  if(session){
    if(session.user.role == "admin"){
      return (
        <div className={styles.navContainer}>
          <nav>
            <div className="text-white text-xl">WC-Care</div> {/* Branding */}
            <div className={`flex gap-10 ${styles.navLinks}`}>
              <Link href="/" className={`text-white ${styles.navLink}`}>Home</Link>
              <Link href="/home/about" className={`text-white ${styles.navLink}`}>About</Link>
              <Link href="/dashboard/user/admin" className={`text-white ${styles.navLink}`}>AdminDashboard</Link>
              {session ? (
                <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
              ) : (
                <Link href="/api/auth/signin?">Login</Link>
              )}
            </div>
          </nav>
        </div>
        
      )
    }
    else if(session?.user?.role == "user"){
      return (
        <div className={styles.navContainer}>
          <nav>
            <div className="text-white text-xl">WC-Care</div> {/* Branding */}
            <div className={`flex gap-10 ${styles.navLinks}`}>
              <Link href="/" className={`text-white ${styles.navLink}`}>Home</Link>
              <Link href="/home/about" className={`text-white ${styles.navLink}`}>About</Link>
              <Link href="/dashboard/user" className={`text-white ${styles.navLink}`}>UserDashboard</Link>
              {session ? (
                <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
              ) : (
                <Link href="/api/auth/signin?">Login</Link>
              )}
            </div>
          </nav>
        </div>
        
      )
    }
  }
  return (
    <div className={styles.navContainer}>
      <nav>
        <div className="text-white text-xl">WC-Care</div> {/* Branding */}
        <div className={`flex gap-10 ${styles.navLinks}`}>
          <Link href="/" className={`text-white ${styles.navLink}`}>Home</Link>
          <Link href="/home/about" className={`text-white ${styles.navLink}`}>About</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin?">Login</Link>
          )}
        </div>
      </nav>
    </div>
    
  )
}

export default homeNav