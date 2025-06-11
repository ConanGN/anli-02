import React from 'react'
import { Space, Card } from 'antd'
import { data } from '@/data'
import { notFound } from 'next/navigation'

interface Iparams { params: { id: string } }

export async function generateMetadata({ params }: Iparams) {
  return {
    title: `博客详情 - ${params.id}`,
  }
}


const Page = ({params}: Iparams) => {
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