import React from 'react'

const BlogLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='max-w-2xl mx，接下来咱继续完善一下这个需求。'>
      {/* 限制整体宽度 */}
      {children}
    </div>
  )
}

export default BlogLayout