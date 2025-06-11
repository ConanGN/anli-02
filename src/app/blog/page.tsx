import React from 'react'
import BlogList from '@/components/blogList'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '博客列表',
}


const Page = () => {
  return (
    <BlogList />
  )
}

export default Page