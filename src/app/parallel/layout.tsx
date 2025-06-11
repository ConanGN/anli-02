'use client'
import React from 'react'
import Link from 'next/link'
import { Layout, Space } from 'antd';

const { Header, Content } = Layout;

export default function ParallelLayout({ children, team, analytics }: { children: React.ReactNode, team: React.ReactNode, analytics: React.ReactNode }) {
  return (
    <Layout className="min-h-screen bg-gray-50">
      <Header className="!bg-transparent flex items-center justify-center">
        <Space size={40}>
            <Link href="/parallel" className="text-lg text-[#6A5ACD]">Home</Link>
            <Link href="/parallel/visitors" className="text-lg text-[#6A5ACD]">Visitors</Link>
        </Space>
      </Header>
      <Content className="p-6">
        <div className="flex gap-6">
          <div className="flex-1 h-80 rounded-2xl flex items-center justify-center bg-[#a5c3b6]">
            {team}
          </div>
          <div className="flex-1 h-80 rounded-2xl flex items-center justify-center bg-[#9477e0]">
            {analytics}
          </div>
        </div>
        <div className="mt-6 h-80 rounded-2xl flex items-center justify-center bg-[#7a7a8f]">
          {children}
        </div>
      </Content>
    </Layout>
  )
}

