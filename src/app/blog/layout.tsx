import React from 'react'

const BlogLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='max-w-2xl mx-auto mt-10'>
      {/* 限制整体宽度 */}
      {children}
    </div>
  )
}

export default BlogLayout