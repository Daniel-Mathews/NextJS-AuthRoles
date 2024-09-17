import React from 'react'
import DashNav from '../../{components}/DashNav'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import {options} from '../../../api/auth/[...nextauth]/options'



const admins = async () => {
  const session = await getServerSession(options);
  
  if(session?.user?.role!="admin"){
    redirect("/api/auth/signout?callbackUrl=/api/auth/signin?callbackUrl=/dashboard/user/admin")
  }
    
  return (
    <>
    <DashNav/>
    <div>This page is only for admins</div>
    </>
  )
}

export default admins