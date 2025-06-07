'use client'
import React from 'react'
import { List, Avatar } from 'antd'
import { data } from '@/data'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            {/*
              List.Item.Meta 用于展示头像、标题等元信息
                - className: 使用 Tailwind CSS 的 !important 修饰符来强制内容垂直居中
                - avatar: 设置头像，使用外部 API 根据索引生成随机头像
                - title: 设置标题，并使用 Next.js 的 Link 组件包裹，使其可以点击跳转到文章详情页
            */}
            <List.Item.Meta
              className='!items-center'  
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />} 
              title={<Link href={`/blog/${item.id}`}>{item.title}</Link>} 
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Page