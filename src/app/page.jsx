//This is the first page in the application. It redirects to the home page which is a public page.



import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
  redirect('/home');
  return null;
}

export default page