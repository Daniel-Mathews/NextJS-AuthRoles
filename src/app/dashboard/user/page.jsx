import React from 'react'
import DashNav from '../{components}/DashNav'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import {options} from '../../api/auth/[...nextauth]/options'

const users = async () => {
  const session = await getServerSession(options);
  
  if(!(session?.user?.role=="user" || session?.user?.role=="admin")){
    redirect("/api/auth/signout?callbackUrl=/api/auth/signin?callbackUrl=/dashboard/user")
  }
  
  return (
    <>
    <DashNav/>
    <div>
      <p>This page is only for authenticated users</p>
      <p>{session.user.email}</p>
      <p>{session.user.role}</p>
    </div>
    </>
  )
}

export default users