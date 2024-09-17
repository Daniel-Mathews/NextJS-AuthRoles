//The file returns the html for the home page
//Server rendered page
//page permission: public

import React from 'react';
import styles from './styles/home.module.css'
import HomeNav from './{components}/HomeNav'
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';


const page = async() => {
  const session = await getServerSession(options);
  return (
    <>
    <HomeNav/>
      <div>
        <p>Test</p>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.role}</p>
      </div>
    </>
    
  )
}

export default page