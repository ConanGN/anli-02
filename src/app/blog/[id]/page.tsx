import React from 'react'
import { Space, Card } from 'antd'
import { data } from '@/data'
import { notFound } from 'next/navigation'

const Page = ({params}: {params: {id: string}}) => {
    const {id} = params
    const item = data.find((item) => item.id === parseInt(id, 10))

    if (!item) {
      notFound();
    }

  return (
    <Space direction="vertical" size={16}>
      {/* 垂直布局 */}
      <Card title={item.title} >
        {/* 标题 */}
        <p>{item.body}</p>
        {/* 内容 */}
      </Card>
    </Space>
  )
}

export default Page